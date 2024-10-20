import React, { useState, useMemo } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [skill, setSkill] = useState('');


  const handleAddTodo = () => {
    setTasks([...tasks, `New todo ${tasks.length}`]);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  
  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };


  const handleAddSkill = () => {
    if (skill.length > 5) {
      setTasks([...tasks, skill]);
      setSkill('');
    } else {
      alert('Skill must be more than 5 characters');
    }
  };

  return (
    <div id="main">
      <h1>Todo and Skill Manager</h1>
      <button id="add-todo-btn" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button id="incr-cnt" onClick={handleIncrement}>
        Increment
      </button>
      <p>Counter: {counter}</p>
      <input
        id="skill-input"
        type="text"
        value={skill}
        onChange={handleSkillChange}
        placeholder="Enter a skill"
      />
      <button id="skill-btn" onClick={handleAddSkill}>
        Add Skill
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} id={`todo-${index}`}>{task}</li>
        ))}
      </ul>
      <UseMemo tasks={tasks} />
      <ReactMemo tasks={tasks} />
    </div>
  );
}

export default App;
