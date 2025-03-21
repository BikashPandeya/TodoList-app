import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaSave, FaTimes } from "react-icons/fa";

const EditTodos = ({ todo, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);

  const handleEditClick = () => {
    setIsEditing(true);
    setNewName(todo.name);
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSave = () => {
    if (newName.trim() && newName !== todo.name) {
      setTodos((prevTodos) =>
        prevTodos.map((t) =>
          t.id === todo.id ? { ...t, name: newName.trim() } : t
        )
      );
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewName(todo.name);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className="edit-todo">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={newName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <div className="edit-actions">
            <FaSave className="save-icon" onClick={handleSave} />
            <FaTimes className="cancel-icon" onClick={handleCancel} />
          </div>
        </div>
      ) : (
        <MdEdit className="edit-icon" onClick={handleEditClick} />
      )}
    </div>
  );
};

export default EditTodos;
