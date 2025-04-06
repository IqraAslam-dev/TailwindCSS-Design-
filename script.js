document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;

    taskList.appendChild(taskItem);
    taskInput.value = ''; // Clear the input field
}

function removeTask(button) {
    button.parentElement.remove();
}
