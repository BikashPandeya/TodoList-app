import { useState, useEffect } from "react";
import DisplayTodos from "./DisplayTodos";
import AddTodo from "./AddTodo";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import DisplayCompletedTodos from "./DisplayCompletedTodos";

function Todo({ TodolistName, darkMode }) {
  // State management
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  // Toggle Add Todo form visibility
  const handleAddTodo = () => {
    setShowAddTodo(!showAddTodo);
  };

  // Add a new todo
  const handleTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), name: todo, completed: false }]);
  };

  // Delete completed todos
  const handleDeleteTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed)); // Remove completed todos
  };

  // Update completedTodos whenever todos changes
  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.completed));
  }, [todos]);

  return (
    <div className="todo-container">
      <h3 className="todo-list-title">{TodolistName}</h3>
      <div className="add-todo">
        <button onClick={handleAddTodo}>
          <i className="fas fa-plus"></i>
          {showAddTodo ? "Close" : "Add Todo"}
        </button>
      </div>

      {showAddTodo && <AddTodo onAddTodo={handleTodo} darkMode={darkMode} />}

      <div className="Todos">
        <DisplayTodos todos={todos} setTodos={setTodos} />
      </div>

      {completedTodos.length > 0 && (
        <div className="completed-section">
          <h3>Completed Todos</h3>
          {completedTodos.map((todo) => (
            <div key={todo.id}>
              <DisplayCompletedTodos todo={todo} />
            </div>
          ))}
          <button onClick={handleDeleteTodos} className="delete-completed">
            <i className="fas fa-trash"></i> Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default Todo;
