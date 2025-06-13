import React, { useState } from "react"
import { v4 as uuid } from "uuid"

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    taskDetails: "",
    taskCategory: "Code"
  })

  const handleFormChange = (event) => {
    const key = event.target.id
    setFormData({
      ...formData,
      [key]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uuid(),
      text: formData.taskDetails,
      category: formData.taskCategory,
    }
    onTaskFormSubmit(newTask)
  }

  const filteredCategories = categories.filter((category) => category !== "All")

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="taskDetails" id="taskDetails" value={formData.taskDetails} onChange={handleFormChange}/>
      </label>
      <label>
        Category
        <select name="category" id="taskCategory" value={formData.taskCategory} onChange={handleFormChange}>
          {filteredCategories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  )
}

export default NewTaskForm;
