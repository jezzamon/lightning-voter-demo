angular.module('app').component('login', {
  
  templateUrl: '/security/login.html',
  bindings: {},
  controller: class LoginCtrl {
    email: string;
    constructor(
      public $location, 
      public currentIdentity, 
      public auth, 
      public toastr) {
      
        if(currentIdentity.authenticated()) {
              $location.path('/home');
            }
    }
    
    login() {
      this.auth.login({
        username: this.email,
        password: "pass"
      }).then(() => {
        this.$location.path('/home');
      }, (err) => {
        this.toastr.error(err);
      })
    }
    
  }
})