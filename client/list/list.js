(function(){

angular.module('app.list', [])
  .controller('ListController', ListController)

ListController.$inject = ['$scope', '$location', 'Jobs']
function ListController ($scope, $location, Jobs) {
  vm = this;

  vm.data = Jobs.getAllJobs();
  
  vm.edit = function (job) {
    Jobs.editJob(job);
    $location.path('/edit')
  }
}
  
})()