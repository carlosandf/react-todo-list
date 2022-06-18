import React from 'react';
import '@styles/TodoList.css';

function TodoList({ children }) {
  return(
    <section className="TodoList">
      <ul>
        {children}
      </ul>
    </section>
  )
}
export { TodoList };