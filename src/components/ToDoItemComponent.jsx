import React, { useEffect, useState } from "react";
import { FaSpinner, FaCheck, FaTimes } from "react-icons/fa";

const mockTask = [
  { id: 1, text: "Terminar Tarea", completed: false },
  { id: 2, text: "Lavar los platos", completed: false },
  { id: 3, text: "Cocinar Almuerzo", completed: false },
  { id: 4, text: "Caminar al perro", completed: true },
];

const fetchTasks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(mockTask), 2000);
  });
};

const ToDoItem = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTaskText, setNewTaskText] = useState(""); 

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
      setIsLoading(false);
    };
    loadTasks();
  }, []);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      const newTask = {
        id: tasks.length + 1, 
        text: taskText,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]); 
      setNewTaskText(""); 
    }
  };

  if (isLoading) {
    return (
      <div className="col-12 mt-4">
        <FaSpinner className="spinner" />
      </div>
    );
  }

  return (
    <div className="col-12 d-flex">
      <div className="col-3"></div>
      <div className="col-6">
        {tasks.map((task) => (
          <div key={task.id} className="col-12 d-flex">
            <div className="col-4">{task.id}</div>
            <div className="col-4">{task.text}</div>
            <div className="col-4">
              <div onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? <FaCheck /> : <FaTimes />}
              </div>
            </div>
          </div>
        ))}
        <div className="col-6 d-flex">
          <input
            type="text"
            className="form-control col-4 "
            id="newTaskText"
            placeholder="Nueva task"
            value={newTaskText}
            onChange={(evento) => setNewTaskText(evento.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary col-4"
            onClick={() => addTask(newTaskText)} 
          >
            Agregar task
          </button>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default ToDoItem;
