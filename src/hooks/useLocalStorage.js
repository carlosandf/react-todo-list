import { useState } from 'react';

function useLocalStorage(elementName, initialValue) {
  const localStorageElement = localStorage.getItem(elementName);
  let parsedElement;
  
  if (!localStorageElement) {
    localStorage.setItem(elementName, JSON.stringify(initialValue));
    parsedElement = initialValue;
  } else {
    parsedElement = JSON.parse(localStorageElement);
  }

  const [element, setElement] = useState(parsedElement);
  
  const saveElement = (newElement) => {
    const stringifiedElements = JSON.stringify(newElement);
    localStorage.setItem(elementName, stringifiedElements);
    setElement(newElement)
  };

  return [
    element,
    saveElement
  ]
}
export { useLocalStorage }