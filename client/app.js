(function(){

angular.module('app', [
  'app.list',
  'app.services',
  'app.job',
  'app.form',
  'app.edit',
  'app.new',
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
      redirectTo: '/'
    })
}

})()