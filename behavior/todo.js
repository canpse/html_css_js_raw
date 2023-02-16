const todo = {};

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

todo.onClickRemoveTask = function(){
    let task = event.currentTarget.parentElement;
    todo._removeTask.call(task);
};


todo._removeTask = function () {
    let task = this;
    let todoList = task.parentElement.children;
    let taskIndex = Array.prototype.indexOf.call(todoList, task);
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
    let newTask = todo._getNewEmptyTask();
    let tasklist = document.getElementById("task_list");
    let newTaskDescription = document.getElementById("new_task_description");
    newTask.children[1].value = newTaskDescription.value;

    tasklist.appendChild(newTask);
    newTaskDescription.value = "";
    newTaskDescription.focus();
    return newTask;
};

todo._getNewEmptyTask = function () {
    let task = document.createElement("li");
    let descriptionTextInput = document.createElement("input");
    let doneInputCheck = document.createElement("input");
    let removeTaskButton = document.createElement("button");

    doneInputCheck.setAttribute("type", "checkbox");
    descriptionTextInput.setAttribute("type", "text");
    descriptionTextInput.setAttribute("onChange", "todo.onChangeTask()");
    removeTaskButton.setAttribute("type", "button");
    removeTaskButton.setAttribute("onClick", "todo.onClickRemoveTask()");
    removeTaskButton.innerHTML = "-";
    
    task.appendChild(doneInputCheck);
    task.appendChild(descriptionTextInput);
    task.appendChild(removeTaskButton);

    return task;
};