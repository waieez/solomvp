(function(){
  
angular.module('app.job', [])
  .directive('job', job)

function job () {
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'directives/job.html',
    scope: {
      data: '=',
    }
  }

  function link (scope, ele, attrs) {
  }
}

})()