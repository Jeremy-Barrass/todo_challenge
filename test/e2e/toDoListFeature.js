describe('To Do List', function(){
  var task = 'Get milk'

  it('adds a task to the list', function(){
    browser.get('http://localhost:8080/views/index.html')
    element(by.model('listCtrl.newTask')).sendKeys(task);
    element(by.className('add')).click();

    expect(element(by.binding('task')).getText()).toEqual('Get milk');
  });
});
