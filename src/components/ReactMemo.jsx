import React from 'react';

const ReactMemo = React.memo(({ tasks = []}) => {
  console.log('Rendering ReactMemo component...');
  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
