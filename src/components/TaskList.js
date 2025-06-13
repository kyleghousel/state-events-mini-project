import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDeleteTask, selectedCategory }) {

  const filteredTasks = (tasksArr, selectedCategory) => {
    return tasksArr.filter((task) => task.category === selectedCategory)
  }

  const displayTasks = (tasksArr) => {
    return tasksArr.map(({ id, text, category}, index) => (
      <Task key={id || index} id={id} text={text} category={category} onDelete={onDeleteTask}/>
    ))
  }

  return (
    <div className="tasks">
      {displayTasks(!selectedCategory || selectedCategory === "All" ? tasks : filteredTasks(tasks, selectedCategory))}
    </div>
  );
}

export default TaskList;
