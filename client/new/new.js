(function(){
  
angular.module('app.new', [])
  .controller('NewController', NewController)

NewController.$inject = ['$scope', '$location', 'Jobs']
function NewController ($scope, $location, Jobs) {
  vm = this;

  vm.data = {};
  
  vm.submit = function(job) {
    Jobs.addJob(job);
    $location.path('/list');
  }
}

})()