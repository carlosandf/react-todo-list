import React from 'react';
import { useState } from 'react';
import TodoCounter from '@components/TodoCounter';
import TodoSearch from '@components/TodoSearch';
import TodoList from '@containers/TodoList';
import TodoItem from '@components/TodoItem';
import CreateTodoButton from '@components/CreateTodoButton';
// import './styles/App.css'

function App({}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoCounter />
      <h2>Has completado 2 de 3 TODOs</h2>
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
