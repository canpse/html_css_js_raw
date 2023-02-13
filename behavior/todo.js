var todo = {
    // functions preceded with _ are to be treated as private

    todoList: JSON.parse(localStorage.getItem('todoList')) || [],

    onLoad:function(){
        var list = document.getElementById("todo_list");
        todo._loadFromStorage();
        if(list.childNodes.length < 1 || list.lastChild.lastChild.value != ""){
            todo._addEmptyItem();
        }
    },

    onChange:function(){
        var list = document.getElementById("todo_list");
        list.childNodes.forEach(todo._removeEmptyItems);
        if(list.lastChild.lastChild.value != ""){
            todo._addTodoToLocalStorage.call(this);
            todo._addEmptyItem();
        }
    },

    onCheck:function(){
        debugger;
        if(this.value == 'on'){
            this.parentElement.lastChild.disabled = true;
        } else {
            this.parentElement.lastChild.disabled = false;
        }
        todo._addTodoToLocalStorage.call(this);
    },

    _addEmptyItem:function(){
        var list = document.getElementById("todo_list");
        var item = document.createElement("li");
        var check = document.createElement("input");
        var input = document.createElement("input");
        check.setAttribute("type", "checkbox");
        input.addEventListener("change", todo.onChange);
        check.addEventListener("select", todo.onCheck);
        item.appendChild(check);
        item.appendChild(input);
        list.appendChild(item);
        input.focus();
        return item;
    },

    _addTodoToLocalStorage:function(){
        var item = this.parentElement;
        todo.todoList.push({"done":item.firstChild.value, "task":item.lastChild.value});
        localStorage.setItem('todoList', JSON.stringify(todo.todoList));
    },

    _removeEmptyItems:function(item){
        if(item.lastChild.value == ""){
            todo._removeFromStorage.call(item);
            item.remove();
        }
    },

    _loadFromStorage:function(){
        var list = document.getElementById('todo_list');
        list.innerHTML = '';
        for (var i = 0; i < todo.todoList.length; i++) {
            var item = todo._addEmptyItem();
            item.lastChild.value = todo.todoList[i].task;
            item.firstChild.value = todo.todoList[i].done;
        }
    },

    _removeFromStorage:function(){
        var item = this;
        var index = Array.prototype.indexOf.call(item.parentElement.children, item);
        todo.todoList.splice(index, 1);
        localStorage.setItem('todoList', JSON.stringify(todo.todoList));
    }

}