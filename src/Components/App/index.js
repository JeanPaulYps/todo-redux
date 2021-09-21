import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { toDoSlice } from '../../Reducers/ToDoSlice';

const store = configureStore({
  reducer:{ 'todo': toDoSlice.reducer }
})


function App ()
{
  return(
    <Provider store = { store }>
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
    </Provider>
  );
};

export { App, } ;