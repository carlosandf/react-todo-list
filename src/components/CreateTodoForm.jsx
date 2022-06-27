import React, { useContext, useState } from 'react';
import '@styles/CreateTodoForm.css';
import { TodoContext } from '@context/TodoContext';

function CreateTodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value)
  }
  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Crea una tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Escribe una tarea'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button TodoForm-button--cancel'>
          Cancelar
        </button>
        <button 
          disabled={newTodoValue.length ? false : true}
          type='submit'
          className='TodoForm-button TodoForm-button--add'>
          Añadir
        </button>
      </div>
    </form>
  );
}
export { CreateTodoForm };