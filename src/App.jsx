import React, { useState, useEffect } from "react";
import Todo from "./components/Todo.jsx";
import "./App.css";

const App = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [TodolistName, setTodolistName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [minimizedLists, setMinimizedLists] = useState({});
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (TodolistName.trim()) {
      setTodoLists([...todoLists, { id: Date.now(), name: TodolistName }]);
      setTodolistName("");
      setShowTodoForm(false);
    }else{
      setError("Please enter a name for the list");
    }
  };

  const toggleMinimize = (listId) => {
    setMinimizedLists(prev => ({
      ...prev,
      [listId]: !prev[listId]
    }));
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <h1>Todo Lists Manager</h1>
        <div className="dark-mode-toggle" style={{display: "flex", justifyContent: "center", alignItems: "center" , marginLeft: "11px"}}>
          <button onClick={toggleDarkMode} title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </div>

      <div className="CreateTodoPlatform">
        <h2>Create a new list:</h2>
        <button onClick={() => setShowTodoForm(!showTodoForm)} className="create-button" style={{display: "flex", justifyContent: "center", alignItems: "center" , height: "30px" , width:"20px"}}>{showTodoForm ? "Close" : "Create"}</button>
        
        {showTodoForm && (
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="The name for new list" 
              value={TodolistName}
              onChange={(e) => setTodolistName(e.target.value)}
            />
            {error && <div style={{color: "red", fontSize: "16px", fontWeight: "bold", textAlign: "center",}}>{error}</div>}
            <button type="submit" className="create-button">Create</button>
          </form>
        )}
      </div>

      <div className="todo-lists-container">
        {todoLists.map((list) => (
          <div key={list.id} className="todo-list-card" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="todo-list-header" style={{display: "flex", justifyContent: "space-between", alignItems: "center" , width: "400px"}}>
              <h2 style={{fontSize: "1.25rem", fontWeight: "bold" }}>{list.name}</h2>
              <button 
                className="minimize-button"
                onClick={() => toggleMinimize(list.id)}
              >
                <i className={`fas ${minimizedLists[list.id] ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
              </button>
            </div>
            <div className={`todo-list-content ${minimizedLists[list.id] ? 'minimized' : ''}`}>
              <Todo TodolistName={list.name} darkMode={darkMode} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
