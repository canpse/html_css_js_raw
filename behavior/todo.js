var todo = {};

todo.taskList = [];

todo.onLoad = function() {
};

todo.onClickAddTask = function() {
    todo._addTask();
};

todo.editTask = function () {
    
};

todo.removeTask = function () {

};

todo._addTask = function () {
    var newTask = todo._getNewEmptyTask();
    var tasklist = document.getElementById("task_list");
    var newTaskDescription = document.getElementById("new_task_description");

    newTask.lastChild.value = newTaskDescription.value;
    tasklist.appendChild(newTask);
    newTaskDescription.value = "";
    newTaskDescription.focus();
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