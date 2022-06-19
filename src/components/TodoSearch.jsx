import React, { useState } from 'react';
import '@styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue)
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