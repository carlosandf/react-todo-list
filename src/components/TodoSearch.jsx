import React, { useContext } from 'react';
import { TodoContext } from '@context/TodoContext';
import '@styles/TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }

  return(
    <input
      className='TodoSearch'
      placeholder='Buscar...'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}
export { TodoSearch };