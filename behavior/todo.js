const todo = {};

todo.taskList = JSON.parse(localStorage.getItem('taskList')) || [];

todo.onLoad = function () {
    todo._loadFromLocalStorage();
};

todo._loadFromLocalStorage = function () {
    todo.taskList.forEach(todo._addTaskFromLocalStorage);
};

todo._addTaskFromLocalStorage = function (taskInStorage) {
    let newTask = todo._getNewEmptyTask();
    let tasklist = document.getElementById("task_list");
    newTask.children[0].value = taskInStorage.done;
    newTask.children[1].value = taskInStorage.description;
    tasklist.appendChild(newTask);
};

todo.onChangeTask = function () {
    let descriptionField = event.currentTarget;
    let task = descriptionField.parentElement;
    if (descriptionField.value === "") {
        todo._removeTask.call(task);
    }
};

todo.onClickRemoveTask = function () {
    let task = event.currentTarget.parentElement;
    todo._removeTask.call(task);
};


todo._removeTask = function () {
    let task = this;
    let todoList = task.parentElement.children;
    let taskIndex = Array.prototype.indexOf.call(todoList, task);
    todo._removeTaskFromLocalStorage.call(task);
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

    todo._addTaskToLocalStorage.call(newTask);

    return newTask;
};

todo._addTaskToLocalStorage = function () {
    let task = this;
    todo.taskList.push({"done": task.children[0].value, "description": task.children[1].value});
    localStorage.setItem('taskList', JSON.stringify(todo.taskList));
};

todo._removeTaskFromLocalStorage = function () {
    let task = this;
    let todoList = task.parentElement.children;
    let taskIndex = Array.prototype.indexOf.call(todoList, task);
    todo.taskList.splice(taskIndex, 1);
    localStorage.setItem('taskList', JSON.stringify(todo.taskList));
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