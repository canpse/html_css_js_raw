var todo = {
    // functions preceded with _ are to be treated as private

    valores: [],

    onLoad:function(){
        var lista = document.getElementById("todo_list");
        if(lista.childNodes.length < 1){
            todo._addItem();
        }
    },

    onChange:function(){
        var lista = document.getElementById("todo_list");
        lista.childNodes.forEach(todo._removeEmptyItems);
        if(lista.lastChild.lastChild.value != ""){
            todo._addItem();
        }
        debugger;
    },

    onCheck:function(){
        debugger;
        if(this.value == 'on'){
            this.parentElement.lastChild.disabled = true;
        } else {
            this.parentElement.lastChild.disabled = false;
        }
    },

    _addItem:function(){
        var lista = document.getElementById("todo_list");
        var item = document.createElement("li");
        var check = document.createElement("input");
        var input = document.createElement("input");
        check.setAttribute("type", "checkbox");
        input.addEventListener("change", todo.onChange);
        check.addEventListener("select", todo.onCheck);
        item.appendChild(check);
        item.appendChild(input);
        lista.appendChild(item);
        input.focus();
    },

    _removeEmptyItems:function(item){
        if(item.lastChild.value == ""){
            item.remove();
        }
    }

}