import '@styles/TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete}) {
  
  return(
    <li className='TodoItem'>
      <i
        onClick={onComplete}
        className={`fa-solid fa-check Icon Icon-check ${completed && 'Icon-check--active'}`}
      />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <i
        onClick={onDelete}
        className="Icon Icon-delete fa-solid fa-xmark"
      />
    </li>
  )
}
export { TodoItem };