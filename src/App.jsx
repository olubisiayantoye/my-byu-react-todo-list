import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function App() {
  // State for todos, initialized from localStorage if available
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return [] // Start with empty list if nothing stored
    return JSON.parse(localValue)     // Restore saved todos from localStorage
  })

  // Sync todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // Add a new todo item
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }, // Generate unique id
      ]
    })
  }

  // Toggle completion status of a todo
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed } // Update only the matched todo
        }
        return todo
      })
    })
  }

  // Delete a todo by id
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id) // Keep all except the one with given id
    })
  }

  return (
    <>
      {/* Form for adding new todos */}
      <NewTodoForm onSubmit={addTodo} />

      {/* App header */}
      <h1 className="header">Todo List</h1>

      {/* Render todo list */}
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </>
  )
}
