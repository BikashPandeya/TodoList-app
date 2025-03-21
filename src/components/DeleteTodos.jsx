import { MdDelete } from "react-icons/md";
import React from 'react'

const DeleteTodos = ({todo , setTodos}) => {
    const handleDelete = () => {
        setTodos(prev => prev.filter(t => t.id !== todo.id))
    }
  return (
    <div>
      <MdDelete onClick={handleDelete} />
    </div>
  )
}

export default DeleteTodos
