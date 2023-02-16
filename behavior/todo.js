var todo = {};

todo.taskList = [];

todo.onLoad = function () {
};

todo.onClickAddTask = function () {
    let newTaskDescriptionNotEmpty = document.getElementById("new_task_description").value !== "";
    if (newTaskDescriptionNotEmpty) {
        todo._addTask();
    }
};

todo.onKeyUpTaskDescription = function () {
    let fieldNotEmpty = event.currentTarget.value !== "";
    if (event.key === "Enter" && fieldNotEmpty) {
        todo._addTask();
    }
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