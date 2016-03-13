describe('ToDoListController', function(){
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty task entry and an empty task list', function(){
    expect(ctrl.newTask).toBeUndefined();
    expect(ctrl.taskList).toBeUndefined();
  });
});
