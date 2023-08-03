document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
  
    addTaskBtn.addEventListener('click', function() {
      const taskHeadingInput = document.getElementById('task-heading');
      const taskDescriptionInput = document.getElementById('task-description');
  
      const taskHeading = taskHeadingInput.value.trim();
      const taskDescription = taskDescriptionInput.value.trim();
  
      if (taskHeading !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>${taskHeading}</strong>
          <p>${taskDescription}</p>
          <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(listItem);
  
        taskHeadingInput.value = '';
        taskDescriptionInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const listItem = event.target.closest('li');
        taskList.removeChild(listItem);
      }
    });
  
    clearAllBtn.addEventListener('click', function() {
      taskList.innerHTML = '';
    });
  });
  