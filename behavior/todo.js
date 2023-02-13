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
        if(lista.lastChild.firstChild.value != ""){
            todo._addItem();
        }
        debugger;
    },

    onCheck:function(){

    },

    _addItem:function(){
        var lista = document.getElementById("todo_list");
        var item = document.createElement("li");
        var input = document.createElement("input");
        var check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        input.addEventListener("change", todo.onChange);
        item.appendChild(input);
        item.appendChild(check);
        lista.appendChild(item);
        input.focus();
    },

    _removeEmptyItems:function(item){
        if(item.firstChild.value == ""){
            item.remove();
        }
    }

}