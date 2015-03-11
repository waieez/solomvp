(function(){

angular.module('app.list', [])
  .controller('ListController', ListController)

ListController.$inject = ['$scope', '$location', '$filter', 'Jobs'];
function ListController ($scope, $location, $filter, Jobs) {
  vm = this;

  vm.edit = function (job) {
    Jobs.editJob(job);
    $location.path('/edit');
  }

  vm.getAllJobs = function () {
    vm.data = Jobs.getAllJobs();
  }

  vm.filterStatus = function(status) {
    var data = Jobs.getAllJobs();
    vm.data = $filter('filter')(data, {status: status});
  }

  vm.getAllJobs();

}
  
})()