import React, { useState, useMemo } from "react";
import UseMemoComponent from "./UseMemo";
import ReactMemoComponent from "./ReactMemo";

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  const addNewTask = () => {
    setTasks([...tasks, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const addCustomTask = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask("");
    } else {
      alert("Task must be more than 5 characters long.");
    }
  };

  const totalTasks = useMemo(() => tasks.length, [tasks]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <button onClick={addNewTask}>Add todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>
      <input
        type="text"
        value={customTask}
        onChange={handleCustomTaskChange}
        placeholder="Enter custom task"
      />
      <button onClick={addCustomTask}>Submit</button>
      <p>Total tasks: {totalTasks}</p>

      <UseMemoComponent tasks={tasks} />
      <ReactMemoComponent tasks={tasks} />
    </div>
  );
}

export default App;
