import React from 'react';
import '@styles/TodoItem.css';

function TodoItem({ text, completed }) {
  return(
    <li className='TodoItem'>
      <i className={`fa-solid fa-check Icon Icon-check ${completed && 'Icon-check--active'}`}/>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <i className="Icon Icon-delete fa-solid fa-xmark"/>
    </li>
  )
}
export { TodoItem };