(function(){
  
angular.module('app.edit', [])
  .controller('EditController', EditController)

EditController.$inject = ['$scope', '$location', 'Jobs']
function EditController ($scope, $location, Jobs) {
  vm = this;
  vm.status = 0;
  vm.data = Jobs.getEdit();

  vm.submit = function(job) {
    Jobs.saveEdit(job)
    $location.path('/list');
  }
}


})()