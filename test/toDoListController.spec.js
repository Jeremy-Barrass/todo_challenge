describe('ToDoListController', function(){
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty task entry and an empty task list', function(){
    expect(ctrl.newTask).toBeUndefined();
    expect(ctrl.taskList).toEqual([]);
  });

  describe('when adding a task to the list', function(){

    it('displays tasks', function(){
      ctrl.newTask = 'Get newspaper';
      ctrl.addTask();
      expect(ctrl.taskList).toEqual(['Get newspaper']);
    });
  });

  describe('changing a task', function(){
    ctrl.newTask = 'Make soup';
    ctrl.addTask();
    ctrl.newTask = 'Knit jumper';
    ctrl.changeTask();
    expect(ctrl.taskList).toEqual(['Knit jumper'])
  });
});
