import '@styles/TodoItem.css';

function TodoItem({ text, completed }) {
  const onComplete = () => {

    alert('Ya Completaste la tarea: ' + text )
  }
  const onDelete = (e) => {
    console.log(e.target)
    e.target.parentNode.remove()
  }
  
  return(
    <li className='TodoItem'>
      <i
        onClick={e => onComplete(e)}
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