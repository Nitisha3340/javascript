import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 italic text-center mt-4">No tasks found.</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map(task => (
        <li key={task.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm">
          <span
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer text-lg ${task.completed ? 'line-through text-green-600' : 'text-gray-800'}`}
          >
            {task.text}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700 text-xl"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;