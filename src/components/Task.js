import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <button
          style={{ color: "red", cursor: "pointer",fontWeight:'bolder' }}
          onClick={() => onDelete(task.id)}
        >
          x
        </button>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
