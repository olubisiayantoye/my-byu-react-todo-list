// Component for displaying a single ToDo item
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        {/* Checkbox for marking todo as completed */}
        <input
          type="checkbox"
          checked={completed} // Checked state is controlled by prop
          onChange={e => toggleTodo(id, e.target.checked)} // Toggle completed state
        />
        {/* Display todo title */}
        {title}
      </label>

      {/* Delete button to remove this todo */}
      <button 
        onClick={() => deleteTodo(id)} 
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  )
}
