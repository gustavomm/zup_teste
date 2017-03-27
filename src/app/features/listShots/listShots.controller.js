export default class ListShotsController {
  constructor(getShots) {
    this.getShotsService = getShots;
    this.shots = '';
    this.page = 0;
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
}

ListShotsController.$inject = [ 'getShots' ];
