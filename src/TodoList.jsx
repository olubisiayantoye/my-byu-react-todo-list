import { TodoItem } from "./TodoItem"

// Component for rendering the list of all ToDo items
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* Show message if there are no todos */}
      {todos.length === 0 && "No Todos"}

      {/* Map through todos array and render each TodoItem */}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}              // Spread todo props: id, title, completed
            key={todo.id}          // Unique key for React list rendering
            toggleTodo={toggleTodo} // Function to toggle completion
            deleteTodo={deleteTodo} // Function to delete todo
          />
        )
      })}
    </ul>
  )
}
