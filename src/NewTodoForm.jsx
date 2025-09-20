import { useState } from "react"

// Component for creating a new ToDo item
export function NewTodoForm({ onSubmit }) {
  // State to store the current value of the input field
  const [newItem, setNewItem] = useState("")

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault() // Prevent page reload on form submit
    if (newItem === "") return // Do nothing if input is empty

    onSubmit(newItem) // Pass new item up to parent component

    setNewItem("") // Clear input after submission
  }

  return (
    // Form for adding a new todo item
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <p>W01 Assignment: React Introduction Project</p>
        
        {/* Input label for accessibility */}
        <label htmlFor="item">New ToDo-List Item</label>
        
        {/* Input field bound to state */}
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)} // Update state on input change
          type="text"
          id="item"
        />
      </div>
      
      {/* Button to submit the form */}
      <button className="btn">Add</button>
    </form>
  )
}
