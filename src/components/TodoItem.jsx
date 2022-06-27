import React from 'react';
import '@styles/TodoItem.css';
import { Icon } from '@components/Icon';

function TodoItem({ text, completed, onComplete, onDelete}) {
  
  return(
    <li className='TodoItem'>
      <Icon type='check' onClick={onComplete} complete={completed}/>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <Icon type='delete' onClick={onDelete} />
    </li>
  )
}
export { TodoItem };