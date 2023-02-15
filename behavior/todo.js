var todo = {};

todo.taskList = [];

todo.editTask = function () {

};

todo.removeTask = function () {

};

todo.addTask = function () {
    var newTask = todo._getNewEmptyTask();
    var tasklist = document.getElementsById("task_list");
    var newTaskDescription = document.getElementsById("new_task_description").value;

    newTask.firstChild.value = newTaskDescription.value;
    tasklist.appendChild(newTask);
    
    return newTask;
};

todo._getNewEmptyTask = function () {
    var item = document.createElement("li");
    var descriptionTextInput = document.createElement("input");
    var doneInputCheck = document.createElement("input");

    descriptionTextInput.setAttribute("type", "text");
    doneInputCheck.setAttribute("type", "checkbox");

    item.appendChild(descriptionTextInput);
    item.appendChild(doneInputCheck);

    return item;
};