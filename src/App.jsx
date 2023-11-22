import { useState, useEffect } from "react";
import axios from "axios";
import { AddTask, TaskList } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);
  let config = {
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/tasks",
        config
      );
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (task) => {
    try {
      console.log({ task });
      await axios.post("http://localhost:3001/api/tasks", task, config);
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/tasks/${id}`, config);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Simple Task Manager</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
