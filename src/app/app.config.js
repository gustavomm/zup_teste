routing.$inject = ['$urlRouterProvider', '$locationProvider', '$sceDelegateProvider'];

export function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

export function trustUrl($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://api.dribbble.com/**'
  ]);
}