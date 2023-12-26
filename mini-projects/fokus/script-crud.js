const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTask = document.querySelector('.app__section-task-list');
const btnCancel = document.querySelector('.app__form-footer__button--cancel');
const pDescriptionTask = document.querySelector('.app__section-active-task-description');
const btnRemoveCompleted = document.querySelector('#btn-remover-concluidas');
const btnRemoveAll = document.querySelector('#btn-remover-todas');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let taskSelected = null;
let liTaskSelected = null;

function updateTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function cleanForm() {
    textArea.value = '';
    formAddTask.classList.add('hidden');
}

function createElementTask(task) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
            fill="#01080E"></path>
    </svg>
    `;

    const p = document.createElement('p');
    p.classList.add('app__section-task-list-item-description');
    p.textContent = task.description;

    const btn = document.createElement('button');
    btn.classList.add('app_button-edit');

    btn.onclick = () => {
        const newDescription =prompt('Informe o novo nome da tarefa?');
        if (newDescription) {
            p.textContent = newDescription;
            task.description = newDescription;
            updateTask();
        }
    }

    const imgBtn = document.createElement('img');
    imgBtn.setAttribute('src', 'imagens/edit.png');

    btn.append(imgBtn);
    li.append(svg);
    li.append(p);
    li.append(btn);

    if (task.completed) {
        li.classList.add('app__section-task-list-item-complete');
        btn.setAttribute('disabled', 'disabled');
    } else {
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active')
                .forEach(element => {
                    element.classList.remove('app__section-task-list-item-active');
                });
            if (taskSelected == task) {
                taskSelected = null;
                liTaskSelected = null;
                pDescriptionTask.textContent = '';
                return;
            }
            taskSelected = task;
            liTaskSelected = li;
            pDescriptionTask.textContent = task.description;
            li.classList.add('app__section-task-list-item-active');
        }
    }
    return li;   
}

btnAddTask.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden');
});

formAddTask.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
        description: textArea.value
    }
    tasks.push(task);
    const elementTask = createElementTask(task);
    ulTask.append(elementTask);
    updateTask();
    textArea.value = '';
    formAddTask.classList.add('hidden');
});

tasks.forEach(task => {
    const elementTask = createElementTask(task);
    ulTask.append(elementTask);
});

btnCancel.addEventListener('click', cleanForm);

document.addEventListener('FocusFinalized', () => {
    if (taskSelected && liTaskSelected) {
        liTaskSelected.classList.remove('app__section-task-list-item-active');
        liTaskSelected.classList.add('app__section-task-list-item-complete');
        liTaskSelected.querySelector('button').setAttribute('disabled', 'disabled');
        taskSelected.completed = true;
        updateTask();
    }
});

const removeTasks = (completeOnly) => {
    const selector = completeOnly ? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
    document.querySelectorAll(selector)
        .forEach(element => element.remove());
    tasks = completeOnly ? tasks.filter(task => !task.completed) : [];
    updateTask();
}

btnRemoveCompleted.onclick = () => removeTasks(true);
btnRemoveAll.onclick = () => removeTasks(false);
