routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('singleShot', {
      url: '/',
      template: require('./singleShot.html'),
      controller: 'singleShotController',
      controllerAs: 'singleShot'
    });
}