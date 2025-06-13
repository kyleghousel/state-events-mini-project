import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid"

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const tasksWithIds = TASKS.map(task => ({ ...task, id: uuid() }))
  const [tasks, setTasks] = useState(tasksWithIds)
  const [categories, setCategories] = useState(CATEGORIES)

  const handleDeleteTask = (idToDelete) => {
    setTasks(tasks => tasks.filter(task => task.id !== idToDelete));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}/>
      <NewTaskForm />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
