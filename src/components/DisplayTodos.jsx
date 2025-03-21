import React from "react";
import CompletedTodos from "./CompletedTodos";
import DeleteTodos from "./DeleteTodos";
import EditTodos from "./EditTodos";

const DisplayTodos = ({ todos, setTodos }) => {
  const handleCompletion = (updatedTodo, completion) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id
          ? { ...todo, completed: completion }
          : todo
      )
    );
  };

  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div className="todo-item-content">
            <h3 
              className="todo-item-name"
              style={{ 
                textDecoration: todo.completed ? "line-through" : "none", 
                textDecorationColor: "white",
                color: todo.completed ? "#2ecc71" : "inherit"
              }}
            >
              {todo.name}
            </h3>
            <div className="todo-item-actions">
              <CompletedTodos todo={todo} completion={handleCompletion} setTodos={setTodos} />
              <EditTodos todo={todo} setTodos={setTodos} />
              <DeleteTodos todo={todo} setTodos={setTodos} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTodos;