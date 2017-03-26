import angular from 'angular';

class GetShots {
  constructor($http) {
    this.$http = $http;
    this.token = '?access_token=5db2b9398e10f8ef7824a7047382b94b7f6eeb289a8a38d6f551b164cd4a3a3f';
  }

  getJson(shot) {
    let query = '';
    if (shot != '') {
      query = 'https://api.dribbble.com/v1/shots' + '/' + shot + this.token;
    }
    else{
      query = 'https://api.dribbble.com/v1/shots' + this.token;
    }
    let json = this.$http.jsonp(query);
    console.log(json);
    return json;
  }
}

GetShots.$inject = ['$http'];

export default angular.module('services.get-shots', [])
.service('getShots', GetShots)
.name;