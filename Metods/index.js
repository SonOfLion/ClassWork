// 1. create array of tasks - and create 5 test tasks +++
// 2. write renderTasks (tasks) fucn that render all tasks +++
// 3. addEventListener for .list
// 4. addEventListener for create button+++
// 5. checkbox handler - update task in the array and render tasks
// 6. create handler - create task object and put to the array and render tasks +++
const tasks = [
    { text: 'Buy milk', done: false, id: '1', },
    { text: 'Go to the gym', done: false, id: '2', },
    { text: 'Lunch', done: false, id: '3', },
    { text: 'Exit', done: true, id: '4', },
    { text: 'Rent a car', done: true, id: '5', },
];
const listElem = document.querySelector(".list");
const renderTasks = (tasksList) => {
    listElem.innerHTML = "";
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map(({ task }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id');
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, task.text);
            return listItemElem;
        });
    listElem.append(...tasksElems);
};

renderTasks(tasks);
//update task
listElem.addEventListener("click", updateTask);

function updateTask(event) {
    console.log(event);

    console.log(event.target);
    const clases = event.target.classList;
    console.log(clases);

    if (clases.contains("list__item-checkbox"))
        return;

    console.log('DONE');
}

const createBtn = document.querySelector(".create-task-btn");
const taskInput = document.querySelector(".task-input");
createBtn.addEventListener('click', createTask);
const createTask = () => {
    const input = document.querySelector(".task-input")
    const inputVal = input.value;
    if (!inputVal) return;
    tasks.push({
        text: taskInput.value,
        done: false,
    });
    input.value = "";
    renderTasks(tasks);
}