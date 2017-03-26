export default class ListShotsController {
  constructor(getShots) {
    this.shots = getShots;
  }

  showShots() {
    let that = this;
  	this.shots.getJson('').then(function(data){
        console.log(data.data.data);
        that.shots = data.data.data;
    });
  }
}

ListShotsController.$inject = [ 'getShots'];
