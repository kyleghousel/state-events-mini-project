import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDeleteTask }) {



  const displayTasks = (tasksArr) => {
    return tasksArr.map(({ id, text, category}) => (
      <Task key={id} id={id} text={text} category={category} onDelete={onDeleteTask}/>
    ))
  }

  return (
    <div className="tasks">
      {displayTasks(tasks)}
    </div>
  );
}

export default TaskList;
