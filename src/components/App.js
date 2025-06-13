import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid"

import { CATEGORIES, TASKS } from "../data";

function App() {
  const tasksWithIds = TASKS.map(task => ({ ...task, id: uuid() }))
  const [tasks, setTasks] = useState(tasksWithIds)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All");


  const handleDeleteTask = (idToDelete) => {
    setTasks(tasks => tasks.filter(task => task.id !== idToDelete));
  }

  const addTask = (newTask) => {
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <NewTaskForm categories={categories} onTaskFormSubmit={addTask}/>
      <TaskList
        tasks={tasks}
        selectedCategory={selectedCategory}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
