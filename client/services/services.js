(function(){

angular.module('app.services', [])
  .factory('Jobs', Jobs)

Jobs.$inject = ['$q', '$location', '$firebaseArray'];
function Jobs ($q, $location, $firebaseArray) {
  var uri, ref;
  var jobs = [];
  var edit = {};

  return {
    login: login,
    getAllJobs: getAllJobs,
    addJob: addJob,
    editJob: editJob,
    getEdit: getEdit,
    saveEdit: saveEdit
  }

  function login (username) {
    uri = "https://boiling-torch-2275.firebaseio.com/" + username;
    ref = new Firebase(uri);
    jobs = $firebaseArray(ref);
  }

  function addJob (job) {
    jobs.$add(job)
      .then(function (ref){
        console.log("job added!");  
      });
  }

  function saveEdit (job) {
    jobs.$save(job)
      .then(function (ref){
        console.log("job saved!");  
      });
  }

  function editJob (job) {
    edit = job;
  }

  function getEdit () {
    return edit;
  }

  function getAllJobs () {
    if (!uri) { $location.path('/login'); }
    return jobs;
  }
}
})()