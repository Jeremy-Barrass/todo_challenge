toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.taskList = { "items": [
    "Get newspaper",
    "Finish coding challenge",
    "Make dinner"
  ]};

  self.addTask = function(){
    console.log('Hello world!')
  };
}]);
