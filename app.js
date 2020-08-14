// Defining UI variables

const form = document.querySelector('#task-form');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterBox = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All event Listeners

LoadEvenListeners();

// Load All event Listeners

function LoadEvenListeners() {
    // Add task event
    form.addEventListener('submit', addTask);

    // delete tasks
    tasksList.addEventListener('click', deleteTask);

    //Clear tasks event listener
    clearBtn.addEventListener('click', clearAllTasks);

    //Filtering the tasks
    filterBox.addEventListener('keyup', filterTasks);
}

// Creating Add Task Functions
function addTask(e) {
    if (taskInput.value === '') {
        alert('Task should not be empty!, Add a task');
    }
    const li = document.createElement('li');
    //add class name in to it
    li.className = 'collection-item';

    // creation of text node and append it to the li

    li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link to delete the task
    const del_link = document.createElement('a');
    del_link.className = 'delete-item secondary-content';

    //Adding icon html to the above link

    del_link.innerHTML = '<i class="fa fa-remove" style="cursor: pointer;"></i>';

    // attaching this icon to the link
    li.appendChild(del_link);

    // Appending this li to the ul
    console.log(li);
    tasksList.appendChild(li);

    //clear the input
    taskInput.value = '';
    e.preventDefault();
}

// Deleting the Task

function deleteTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        //console.log(e.target);
        if (confirm('Are you sure? wanted to delete : ' + `${e.target.parentElement.parentElement.innerText}` + ' From the list')) {
            // console.log(e.target.parentElement.parentElement.innerText);
            e.target.parentElement.parentElement.remove();
        }
    }
    //console.log(e.target);
}

// Clear all tasks

function clearAllTasks() {
    // tasksList.innerHTML = '';
    if (!tasksList.firstChild) {
        alert('List is already empty!');
    }
    while (tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
    }
}

// Filtering the tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    //console.log(e.target);
    //console.log(e.target.value);
    // console.log(text);

    document.querySelectorAll('.collection-item').forEach
        (function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
}



