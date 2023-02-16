var todo = {};

todo.taskList = [];

todo.onLoad = function () {
};

todo.onChangeTask = function () {
    let descriptionField = event.currentTarget;
    let task = descriptionField.parentElement;
    if (descriptionField.value === "") {
        todo._removeTask.call(task);
    }
};


todo._removeTask = function () {
    var task = this;
    var todoList = task.parentElement.children;
    var taskIndex = Array.prototype.indexOf.call(todoList, task);
    todoList[taskIndex].remove();
    
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
    var task = document.createElement("li");
    var descriptionTextInput = document.createElement("input");
    var doneInputCheck = document.createElement("input");

    doneInputCheck.setAttribute("type", "checkbox");
    descriptionTextInput.setAttribute("type", "text");
    descriptionTextInput.setAttribute("onChange", "todo.onChangeTask()");

    task.appendChild(doneInputCheck);
    task.appendChild(descriptionTextInput);

    return task;
};