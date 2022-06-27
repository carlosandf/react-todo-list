import React from 'react';
import '@styles/Icon.css'


function Icon({type, onClick, complete}) {
  const iconTypes = {
    "delete": (<i onClick={onClick} className="fa-solid fa-xmark Icon Icon-delete"/>),
    "check": (<i onClick={onClick} className={`fa-solid fa-check Icon Icon-check ${complete && 'Icon-check--active'}`}/>)
  }

  return iconTypes[type]

}
export { Icon };