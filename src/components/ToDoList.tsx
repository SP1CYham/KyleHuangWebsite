import { useState, type BaseSyntheticEvent } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState(["finish this website..."]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e: BaseSyntheticEvent) {
    setNewTask(e.target.value);
  }
  function handleAddTask() {
    if (newTask.trim() == "") return;
    setTasks((n) => [...n, newTask]);
    setNewTask("");
  }
  function handleRemoveTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function handleMoveTaskUp(index: number) {
    if (index <= 0) return;

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  }
  function handleMoveTaskDown(index: number) {
    if (index == tasks.length - 1) return;

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h2>to-do list:</h2>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => handleRemoveTask(index)}>remove task</button>
            {""}
            <button onClick={() => handleMoveTaskUp(index)}>UP</button>
            {""}
            <button onClick={() => handleMoveTaskDown(index)}>DOWN</button>
          </li>
        ))}
      </ol>

      <br />
      <input
        value={newTask}
        placeholder="enter a task.."
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>add task!</button>
    </div>
  );
}
