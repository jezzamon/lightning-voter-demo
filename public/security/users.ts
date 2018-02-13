angular.module('app').service('users', class Users {

  constructor( public $http, public $q) {
    
  }

  createNewUser(newUser) {
    return this.$http.post('/api/users', newUser);
  }

  getAllUsers() {
    var dfd = this.$q.defer();
    
    this.$http.get('/api/users').then(function(response) {
      dfd.resolve(response.data);
    })
    
    return dfd.promise;
  }
  
});