import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from '@context/TodoContext';


function App() {

  return (
    <React.StrictMode>
      <TodoProvider>
        <AppUi />
      </TodoProvider>
    </React.StrictMode>
  );
}

export { App };
