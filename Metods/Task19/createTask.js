import { createTask, getTasksList } from './gateWay.js';
import { renderTasks } from './renderer.js';

//algo
//1. create task obj
//2. make past request with task
//4. render new tasks
export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }

    taskTitleInputElem.value = '';

    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString()
    };


    createTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks(newTasksList);
        })

}