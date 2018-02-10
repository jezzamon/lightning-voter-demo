angular.module('app').directive('unreviewedTalk', function() {
  return {
    templateUrl: '/home/unreviewedTalk.html',
    scope: {},
    controllerAs: '$ctrl', // using $ctrl as opposed to recommended 'vm', for ng 1.5 conventions
    bindToController: {
      session: '=',
      voteYes: '&',
      voteNo: '&'
    },
    controller: function() {
      
      this.yes = function() {
        this.voteYes();
      }
      
      this.no = function() {
        this.voteNo();
      }
    }
  }
})