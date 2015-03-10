(function(){

angular.module('app.list', [])
  .controller('ListController', ListController)

ListController.$inject = ['$scope']
function ListController ($scope) {
  vm = this;
  vm.data = "Hello World";
}
  
})()