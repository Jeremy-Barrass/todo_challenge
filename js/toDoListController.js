toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.addTask = function(){
    self.taskList = { "items": [
      "Get newspaper",
      "Finish coding challenge",
      "Make dinner"
    ]};
  };
}]);
