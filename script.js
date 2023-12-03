 function addTask() {
      var taskInput = document.getElementById('taskInput');
      var taskList = document.getElementById('taskList');

      if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.innerHTML = `
          <input type="checkbox" onchange="toggleTaskStatus(this)">
          <span>${taskInput.value}</span>
          <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
      }
    }

    function deleteTask(button) {
      var taskList = document.getElementById('taskList');
      var li = button.parentNode;
      taskList.removeChild(li);
    }

    function toggleTaskStatus(checkbox) {
      var taskText = checkbox.nextElementSibling;
      if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
      } else {
        taskText.style.textDecoration = 'none';
      }
    }

    function addTaskOnEnter(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    }