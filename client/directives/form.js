(function(){
  
angular.module('app.form', [])
  .directive('itemForm', itemForm)

function itemForm () {
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'directives/form.html',
    scope: {
      data: '='
    }
  }

  function link (scope, ele, attrs) {
  }
}

})()