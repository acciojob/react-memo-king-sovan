import React, { useMemo } from 'react'

const UseMemo = ({ tasks = [] }) => {
    const longRunningTask = useMemo(() => {
        console.log('Calculating long-running task...')
        return tasks.map(task => task.toUpperCase()).join(', ');
    }, [tasks]);

  return (
    <div>
        <h3>Long Running Task Output:</h3>
        <p>{longRunningTask}</p>
    </div>
  )
}

export default UseMemo