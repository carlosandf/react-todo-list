import React, { Fragment, useContext } from "react";
import { TodoContext } from "@context/TodoContext";
import { TodoCounter } from '@components/TodoCounter';
import { TodoSearch } from '@components/TodoSearch';
import { TodoList } from '@containers/TodoList';
import { TodoItem } from '@components/TodoItem';
import { CreateTodoButton } from '@components/CreateTodoButton';
import { Message } from '@components/Message';
import { Modal } from '@components/Modal';
import { CreateTodoForm } from '@components/CreateTodoForm';
import { TodosLoading } from "@components/TodosLoading";

function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    searchValue,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>

        {error && <Message text='Hubo un error inesperado, intenta otra vez' />}
        
        {loading && <TodosLoading />}

        {
          (!loading && !searchedTodos.length && searchValue) && 
            (
              <Message text='Esa tarea  no existe' />
            )
        }

        {(!loading && !searchedTodos.length && !searchValue) && (
          <Message text='Agrega tu primera tarea a la lista' />
        )}
        
        {
          searchedTodos.map(item => (
            <TodoItem 
              key={item.text}
              text={item.text}
              completed={item.completed}
              onComplete={() => completeTodo(item.text)}
              onDelete={() => deleteTodo(item.text)}
            />
          ))
        }
      </TodoList>

      {openModal && ( 
        <Modal>
          <CreateTodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </Fragment>
  )
}
export { AppUi };