import { renderTasks } from './render.js';
import { getTasks } from './gateWay.js';
import { onCreateTask } from './createTask.js';


getTasks().then((tasksList) =>
    renderTasks(tasksList));

const createButElem = document.querySelector('.create-task-btn');
createButElem.addEventListener('click', onCreateTask);