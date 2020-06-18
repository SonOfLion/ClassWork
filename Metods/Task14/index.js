const tasks = [{
        text: 'Buy milk',
        done: false,
        id: 1,
        createDate: new Date(2015, 9, 1, 0, 0, 0, 0),
        doneDate: undefined,
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 2,
        createDate: new Date(2016, 9, 1, 0, 0, 0, 0),
        doneDate: undefined,
    },
    {
        text: 'Visit party',
        done: false,
        id: 3,
        createDate: new Date(2016, 9, 1, 0, 0, 0, 0),
        doneDate: undefined,
    },
    {
        text: 'Visit doctor',
        done: true,
        id: 4,
        createDate: new Date(2016, 9, 1, 0, 0, 0, 0),
        doneDate: new Date(2017, 5, 3),
    },
    {
        text: 'Buy meat',
        done: true,
        id: 5,
        createDate: new Date(2018, 9, 1, 0, 0, 0, 0),
        doneDate: new Date(2019, 6, 4),
    },
];
const listElem = document.querySelector('.list');
const crtBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');
const renderTasks = listItems => {
    listElem.innerHTML = '';
    const listItemsElems = listItems
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            };
            if (a.done) {
                return new Date(b.finishDate) - new Date(a.finishDate);
            }
            return new Date(b.createDate) - new Date(a.createDate);
        })
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.dataset.id = `${id}`;
            const checkboxItem = document.createElement('input');
            checkboxItem.setAttribute('type', 'checkbox');
            checkboxItem.checked = done;
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            checkboxItem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxItem, text);
            return listItemElem;
        });
    listElem.append(...listItemsElems);
};
const updateTask = (event) => {
    const checkedElem = event.target;
    if (checkedElem.tagName !== 'INPUT') {
        return;
    }
    const taskById = tasks
        .find(task => task.id === +checkedElem.parentElement.dataset.id);
    taskById.done = checkedElem.checked;
    taskById.doneDate = taskById.done ? new Date() : null;
    renderTasks(tasks);
};
const createTask = () => {
    if (inputElem.value === '') {
        return;
    }
    tasks.push({
        id: tasks.length + 1,
        text: inputElem.value,
        done: false,
        createDate: new Date(),
        doneDate: null,
    });
    renderTasks(tasks);
};

renderTasks(tasks);
listElem.addEventListener('click', updateTask);
crtBtnElem.addEventListener('click', createTask);