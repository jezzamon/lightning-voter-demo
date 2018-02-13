angular.module('app').service('currentIdentity', (function () {
    // constructor ($http, $q) {
    //   this.$http = $http;
    //   this.$q = $q;  
    // }
    // ts shortcut
    function CurrentIdentity($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    CurrentIdentity.prototype.setUser = function (user) {
        this.currentUser = user;
    };
    CurrentIdentity.prototype.clearUser = function () {
        this.currentUser = null;
    };
    CurrentIdentity.prototype.authenticated = function () {
        return !!this.currentUser;
    };
    CurrentIdentity.prototype.updateUser = function (newUserObj) {
        var dfd = this.$q.defer();
        this.$http.put('/api/users/' + this.currentUser.id, newUserObj).then(function (response) {
            this.currentUser.firstName = newUserObj.firstName;
            this.currentUser.lastName = newUserObj.lastName;
            dfd.resolve();
        }.bind(this), function (response) {
            dfd.reject("Error Logging Out");
        });
        return dfd.promise;
    };
    return CurrentIdentity;
}()));
//# sourceMappingURL=currentIdentity.js.map