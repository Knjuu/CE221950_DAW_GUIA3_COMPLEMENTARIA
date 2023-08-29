function crearTodolist() {
    const tasks = [];
  
    function agregarTarea(task) {
      tasks.push(task);
      return tasks.slice(); 
    }
  
    return agregarTarea;
  }
  
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  
  const agregarTarea = crearTodolist();
  
  addTaskBtn.addEventListener('click', () => {
    const nuevaTarea = taskInput.value;
    if (nuevaTarea) {
      const tareasActualizadas = agregarTarea(nuevaTarea); 
      actualizarListaDeTareas(tareasActualizadas);
      taskInput.value = '';
    }
  });
  
  function actualizarListaDeTareas(tareas) {
    taskList.innerHTML = '';
    tareas.forEach(tarea => {
      const li = document.createElement('li');
      li.textContent = tarea;
      taskList.appendChild(li);
    });
  }
  