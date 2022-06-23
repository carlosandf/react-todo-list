import React, { Fragment } from "react";
import { TodoCounter } from '@components/TodoCounter';
import { TodoSearch } from '@components/TodoSearch';
import { TodoList } from '@containers/TodoList';
import { TodoItem } from '@components/TodoItem';
import { CreateTodoButton } from '@components/CreateTodoButton';
import { Message } from '@components/Message';

function AppUi({
  error,
  loading,
  totalTodos, 
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {

  return (
    <Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {error && <Message text='Hubo un error inesperado, intenta otra vez' />}
        {loading && <Message text='Carrgardo...' />}

        {
          (!loading && !searchedTodos.length) && <Message text='Agrega tu primera tarea a la lista' />
        }

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
      <CreateTodoButton />
    </Fragment>
  )
}
export { AppUi };