import React from 'react';
import '@styles/CreateTodoButton.css';

function CreateTodoButton({setOpenModal, openModal}) {
  const onClickButton = () => {
    setOpenModal(!openModal);
  }

  return(
    <button 
      className={`CreateTodoButton ${openModal && 'CreateTodoButton-delete'}`}
      onClick={onClickButton} >
      +
    </button>
  )
}
export { CreateTodoButton };