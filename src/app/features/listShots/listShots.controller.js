export default class ListShotsController {
  constructor(getShots) {
    this.shots = getShots;
  }

  showShots() {
  	this.shots = this.shots.getJson('');
  }
}

ListShotsController.$inject = [ 'getShots'];
