const todo = [];
let todoDisplay = '';
renderTodolist();

function renderTodolist() {
    todoDisplay = '';

    for (let index = 0; index < todo.length; index++) {
        let totalvalueObject = todo[index];
        const list = totalvalueObject.list;
        const dueDate = totalvalueObject.dueDate;

        let display = `<p>${list} ${dueDate}
        <button onclick="todo.splice(${index}, 1); 
        renderTodolist();">
        Delete</button>
        </p>`;
        todoDisplay = todoDisplay + display;
        console.log(display);
    }
    document.querySelector('.js-to-do-list').innerHTML = todoDisplay;
}

function addToDo() {
    const inputElement = document.querySelector('.js-input-element');
    const dateInput = document.querySelector('.js-due-date');

    const name = inputElement.value.trim();  // Added .trim()
    const dueDate = dateInput.value;

    // Check if name is empty
    if (name === '') {
        alert('Please enter a todo item');
        return;
    }

  
    todo.push({
        list: name,
        dueDate: dueDate  
    });

    inputElement.value = '';
    dateInput.value = '';  // Clear date input too
    renderTodolist();
}