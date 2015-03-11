(function(){

angular.module('app.login', [])
  .controller('LoginController', LoginController)

LoginController.$inject = ['$scope', '$location', 'Jobs'];
function LoginController ($scope, $location, Jobs) {
  vm = this;
  vm.login = function (username) {
    Jobs.login(username);
    $location.path('/list');
  }
}

})()