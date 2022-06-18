import React, { Fragment } from 'react';
import { TodoCounter } from '@components/TodoCounter';
import { TodoSearch } from '@components/TodoSearch';
import { TodoList } from '@containers/TodoList';
import { TodoItem } from '@components/TodoItem';
import { CreateTodoButton } from '@components/CreateTodoButton';
// import './styles/App.css'

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Lorar con la llorona', completed: false },
]

function App() {

  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(item => (
            <TodoItem completed={item.completed} key={item.text} text={item.text} />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  )
}

export { App };
