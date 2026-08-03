const todoList = [];
//renderToDoList();

function renderToDoList() {
    let todolistHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todolistHTML = todolistHTML + html;
    }
    //console.log(todolistHTML);
    document.querySelector('.js-display-input')
        .innerHTML = todolistHTML;
};

function addtodo() {
    const inputElement = document.querySelector('.js-name-input')
    let name = inputElement.value;
    // console.log(name)
    todoList.push(name);
    // console.log(name);


    //make input blank
    inputElement.value = '';
    renderToDoList();
};