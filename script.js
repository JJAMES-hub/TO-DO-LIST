const todo = [];
let todoDisplay = '';
renderTodolist();

function renderTodolist() {
    todoDisplay = '';

    for (let index = 0; index < todo.length; index++) {
        let totalvalue = todo[index];
        let display = `<p>${totalvalue}<button onclick ="todo.splice(${index}, 1); renderTodolist()">Delete</button></p>`;
        // console.log(display)
        todoDisplay = todoDisplay + display;

        console.log(display);

    }
    document.querySelector('.js-to-do-list').innerHTML = todoDisplay;

}

function addToDo() {
    const inputElement = document.querySelector('.js-input-element');
    const name = inputElement.value;
    //   console.log(name)

    todo.push(name);
    // console.log(todo);

    inputElement.value = '';
    renderTodolist();
}; 