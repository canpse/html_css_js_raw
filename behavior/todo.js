var todo = {};

todo.taskList = [];

todo.onLoad = function() {
};

todo.editTask = function () {
    
};

todo.removeTask = function () {

};

todo.addTask = function () {
    var newTask = todo._getNewEmptyTask();
    var tasklist = document.getElementById("task_list");
    var newTaskDescription = document.getElementById("new_task_description").value;

    newTask.lastChild.value = newTaskDescription;
    tasklist.appendChild(newTask);
    
    return newTask;
};

todo._getNewEmptyTask = function () {
    var item = document.createElement("li");
    var descriptionTextInput = document.createElement("input");
    var doneInputCheck = document.createElement("input");

    doneInputCheck.setAttribute("type", "checkbox");
    descriptionTextInput.setAttribute("type", "text");

    item.appendChild(doneInputCheck);
    item.appendChild(descriptionTextInput);

    return item;
};