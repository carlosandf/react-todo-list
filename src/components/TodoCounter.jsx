import React, { useContext } from 'react';
import { TodoContext } from '@context/TodoContext'
import '@styles/TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return(
    <h2 className='TodoCounter'>Has completado {completedTodos}/{totalTodos} Tareas</h2>
  )
}
export { TodoCounter };