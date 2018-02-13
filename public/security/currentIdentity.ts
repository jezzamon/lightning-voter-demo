angular.module('app').service('currentIdentity', class CurrentIdentity {
  
  // $http: any;
  // $q: any;
  currentUser: any;
  
  // constructor ($http, $q) {
  //   this.$http = $http;
  //   this.$q = $q;  
  // }
  
  // ts shortcut
  constructor ( public $http, public $q) {

  }
  setUser(user) {
    this.currentUser = user;
  }
  clearUser() {
    this.currentUser = null;
  }
  authenticated() {
    return !!this.currentUser;
  }
  updateUser(newUserObj) {
    var dfd = this.$q.defer();
    
    
    this.$http.put('/api/users/' + this.currentUser.id, newUserObj).then(function(response) {
      this.currentUser.firstName = newUserObj.firstName;
      this.currentUser.lastName = newUserObj.lastName;
      dfd.resolve();
    }.bind(this), function(response) {
      dfd.reject("Error Logging Out");
    })
    return dfd.promise;
  }
});