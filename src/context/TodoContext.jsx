import React, { createContext, useState } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';


const versionTodos = 'TODOS_V1';

const TodoContext = createContext();

function TodoProvider({children}) {

  const {
    element: todos,
    saveElement: saveTodos,
    loading,
    error
  } = useLocalStorage(versionTodos, []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
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
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: text,
    });
    saveTodos(newTodos);
  };

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
    <TodoContext.Provider value={{
      error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal,
      saveTodos,
    }}>
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };