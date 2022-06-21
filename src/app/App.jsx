import React, { useState } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { AppUi } from './AppUi';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso de intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
// ];

const versionTodos = 'TODOS_V1';


function App() {

  const [todos, saveTodos] = useLocalStorage(versionTodos, []);
  const [patitos, savePatitos] = useLocalStorage('PATOS_V2', 'FERNANDO');

  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];                              

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  }
  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }


  // function to mark as "completed" pending todoe in the list
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  //function to remove todoes from the list
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };

  return (
    <React.StrictMode>
      {/* <p>{patitos}</p> */}
      <AppUi
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </React.StrictMode>
  );
}

export { App };
