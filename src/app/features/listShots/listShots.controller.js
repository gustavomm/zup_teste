

export default class ListShotsController {
  constructor(getShots, $sce) {
    this.getShotsService = getShots;
    this.shots = '';
    this.page = 0;
    this.layout = {
      col: 'col-xs-6 col-sm-4 col-md-3 col-lg-2',
      img: 'teaser'
    };
    this.singleShot = '';
    this.comments = '';
    this.$sce = $sce;
  }

  showShots() {
    this.page++;
    let that = this;
  	this.getShotsService.getJson(this.page).then(function(data){
      if (that.shots != ''){
        for (var key in data.data.data) {
          let tmp = {};
          let int_key = parseInt(key);
          int_key = int_key + (12 * (that.page-1));
          tmp[int_key] = data.data.data[key];
          that.shots.push(tmp[int_key]);
        }
      }
      else {
        that.shots = data.data.data;
      }
      for (var key in that.shots){
        let int_key = parseInt(key);
        console.log(that.page);
        if(int_key >= ((12 * that.page) - 12) && (int_key < 12*that.page)){
          that.shots[key].description = that.$sce.trustAsHtml(that.shots[key].description);
        }
      }
      console.log(that.shots);
    });
  }

  showComments(id){
    let that = this;
    this.getShotsService.getExtraContent(id, 'comments').then(function(data){
      that.comments = data.data.data;
      for (var key in that.comments) {
        that.comments[key].body = that.$sce.trustAsHtml(that.comments[key].body);
      }
    });
  }

  smallShots(){
    this.layout.col = 'col-xs-6 col-sm-4 col-md-3 col-lg-2';
    this.layout.img = 'teaser';
  }

  normalShots(){
    this.layout.col = 'col-xs-12 col-sm-6 col-md-4 col-lg-3';
    this.layout.img = 'normal';
  }

  selectShot(shot){
    this.singleShot = shot;
    this.showDescription(shot.description);
    this.showComments(shot.id);
  }

  showDescription(text){
    $('div.singleShot-description').html(text);
  }
}

ListShotsController.$inject = [ 'getShots', '$sce'];
