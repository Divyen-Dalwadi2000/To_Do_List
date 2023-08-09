const addtodo = document.getElementById("addtodo");
const todo_input = document.getElementById("todo_input");
const todo_list = document.getElementById("todo_list");

addtodo.addEventListener("click", () => {
    const new_todo = document.createElement("li");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.onclick = () => {
        new_todo.classList.toggle('completed');
    };

    new_todo.appendChild(checkbox);

    const todo_text = document.createTextNode(todo_input.value);
    new_todo.appendChild(todo_text);


    new_todo.classList.add('todo-item');
    todo_list.appendChild(new_todo);
    todo_input.value = '';
});




