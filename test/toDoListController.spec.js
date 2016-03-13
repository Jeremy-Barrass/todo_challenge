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

  describe('when adding a task to the list', function(){
    var items = [
      "Get newspaper",
      "Finish coding challenge",
      "Make dinner"
    ];

    it('displays tasks', function(){
      expect(ctrl.taskList.items).toEqual(items);
    });
  });
});
