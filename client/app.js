(function(){

angular.module('app', [
  'app.list',
  'firebase',
  'ngRoute'
])
.config(config)

config.$inject = ['$routeProvider'];
function config ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'list/list.html',
      controller: 'ListController',
      controllerAs: 'list'
    })
    .otherwise({
      redirectTo: '/'
    })
}

})()