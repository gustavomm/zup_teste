export default class ListShotsController {
  constructor(getShots, $scope) {
    this.getShotsService = getShots;
    this.shots = '';
    this.page = 0;
    this.$scope = $scope;
    this.layout = {
      col: 'col-xs-6 col-sm-4 col-md-3 col-lg-2',
      img: 'teaser'
    };
    this.singleShot = '';
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
      console.log(that.shots);
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
  }
}

ListShotsController.$inject = [ 'getShots', '$scope' ];
