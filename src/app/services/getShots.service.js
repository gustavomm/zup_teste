import angular from 'angular';

class GetShots {
  constructor($http) {
    this.$http = $http;
    this.token = 'access_token=5db2b9398e10f8ef7824a7047382b94b7f6eeb289a8a38d6f551b164cd4a3a3f';
  }

  getJson(page) {
    let query = 'https://api.dribbble.com/v1/shots' + '?page=' + page + '&' + this.token ;
    return this.$http.jsonp(query);
  }
}

GetShots.$inject = ['$http'];

export default angular.module('services.get-shots', [])
.service('getShots', GetShots)
.name;