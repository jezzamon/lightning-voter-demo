
describe('userDetails', function() {
  var $ctrlCnst; 
  
  beforeEach(module('app'));
  
  beforeEach(inject(function($componentController) {
    $ctrlCnst = $componentController;
  }));
  
  it('should set the user on the controller to the matching user by id', function() {
    
    var ctrl = $ctrlCnst('userDetails',
      // two params needed 
      { $routeParams : {id:3}}, //1) paramaters 
      { allUsers: [{id:1,name:'wrong'},{id:3,name:'correct'}]} //2) bindings passed 
    )
      
    expect(ctrl.user.name).toBe('correct');
  })
})