angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  
  constructor (public sessions, public currentIdentity) {
    this.value = 0;
  }
  
  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(response => {
      this.value = response.data.count;
    })
  }
  
})