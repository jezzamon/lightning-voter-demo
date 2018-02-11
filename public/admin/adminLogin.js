angular.module('app').component('adminLogin', {
  templateUrl: '/admin/adminLogin.html', //add html here
  bindings: {}, // ng1.5 use bindings instead of scope property
  controller: function($location, currentIdentity, auth, toastr) {
    
    this.loggedIn = currentIdentity.authenticated();
    if(this.loggedIn) {
      $location.path('/home');
    }
    
    this.login = function() {
      auth.login({
        username: this.email,
        password: this.password
      }).then(function() {
        $location.path('/home');
      }, function(err) {
        toastr.error(err);
      })
    }
  }
})