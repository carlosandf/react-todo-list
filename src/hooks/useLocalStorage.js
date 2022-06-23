import { useState, useEffect } from 'react';

function useLocalStorage(elementName, initialValue) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true);
  const [element, setElement] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageElement = localStorage.getItem(elementName);
        let parsedElement;
        
        if (!localStorageElement) {
          localStorage.setItem(elementName, JSON.stringify(initialValue));
          parsedElement = initialValue;
        } else {
          parsedElement = JSON.parse(localStorageElement);
        }
        
        setElement(parsedElement);
        setLoading(false);
      } catch (error) {
        setError(true)
      }
    }, 1500);
  });
  
  const saveElement = (newElement) => {
    try {
      const stringifiedElements = JSON.stringify(newElement);
      localStorage.setItem(elementName, stringifiedElements);
      setElement(newElement);
    } catch (error) {
      setError(error);
    }
  };

  return {
    element,
    saveElement,
    loading,
    error
  }
}
export { useLocalStorage }