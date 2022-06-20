import '@styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
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