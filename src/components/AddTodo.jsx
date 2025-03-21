import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ onAddTodo, darkMode }) => {
  const [formData, setFormData] = useState({
    field1: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.field1.trim()) {
      onAddTodo(formData.field1); // Ensure this line is correct
      setFormData({ field1: "" }); // Reset form
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "25vw",
          }}
        >
          <input
            type="text"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
            placeholder="Add a todo"
          />
          <button type="submit" style={{
            marginLeft: "10px", 
            marginRight: "10px",
            background: darkMode ? "#34495e" : "#3498db",
            color: darkMode ? "#e0e0e0" : "white",
            transition: "background 0.3s"
          }}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
