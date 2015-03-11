(function(){
  
angular.module('app.filters', [])
  .filter('custom', custom)
  .factory('Map', Map)
  
function custom () {
  return function (coll, cb){
    var filtered = [];
    for (var i = 0; i < coll.length; i++) {
      if ( cb(coll[i]) ) {
        filtered.push(coll[i]);
      }
    };
    return filtered;
  }
}
})()