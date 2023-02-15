var todo = {};

todo.taskList = [];

todo.editTask = function(){

};

todo.removeTask = function(){

};

todo.addTask = function(){

};

todo._getNewEmptyTask = function(){
    var item = {};
    var li = document.createElement("li");
    var textInput = document.createElement("input");
    var checkBoxInput = document.createElement("input");
    
    textInput.setAttribute("type", "text");
    checkBoxInput.setAttribute("type", "checkbox");
    
    item.li = li;
    item.text = textInput;
    item.check = checkBoxInput;
    
    return item;
};