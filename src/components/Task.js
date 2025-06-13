import React from "react";

function Task({ id, text, category, onDelete }) {

  const deleteListItem = () => {
    onDelete(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteListItem}>X</button>
    </div>
  );
}

export default Task;
