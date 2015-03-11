(function(){

angular.module('app', [
  'app.services',
  'app.filters',

  'app.job',
  'app.form',
  
  'app.edit',
  'app.new',
  'app.list',
  'app.login',

  'firebase',
  'ngRoute'
])
.config(config)

config.$inject = ['$routeProvider'];
function config ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .when('/list', {
      templateUrl: 'list/list.html',
      controller: 'ListController',
      controllerAs: 'list'
    })
    .when('/new', {
      templateUrl: 'new/new.html',
      controller: 'NewController',
      controllerAs: 'new'
    })
    .when('/edit', {
      templateUrl: 'edit/edit.html',
      controller: 'EditController',
      controllerAs: 'edit'
    })
    .otherwise({
      redirectTo: '/login'
    })
}

})()