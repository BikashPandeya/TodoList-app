import React from 'react'

const DisplayCompletedTodos = ({todo}) => {
  return (
    <span style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#2ecc71'}}>{todo.name}</span>
  )
}

export default DisplayCompletedTodos
