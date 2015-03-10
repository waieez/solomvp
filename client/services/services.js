(function(){

angular.module('app.services', [])
  .factory('Jobs', Jobs)

Jobs.$inject = ['$q', '$location', '$firebaseArray'];
function Jobs ($q, $location, $firebaseArray) {
  var uri = "https://boiling-torch-2275.firebaseio.com/jobs";
  var ref = new Firebase(uri);
  jobs = $firebaseArray(ref);
  var edit = {};

  return {
    addJob: addJob,
    editJob: editJob,
    getEdit: getEdit,
    saveEdit: saveEdit,
    getAllJobs: getAllJobs
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
    return jobs;
  }
}
})()