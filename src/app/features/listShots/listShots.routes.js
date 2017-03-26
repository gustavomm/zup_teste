routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('listShots', {
      url: '/',
      template: require('./listShots.html'),
      controller: 'ListShotsController',
      controllerAs: 'listShots'
    });
}