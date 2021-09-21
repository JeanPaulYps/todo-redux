import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { toDoSlice } from '../../Reducers/ToDoSlice';
import { SearchSlice } from '../../Reducers/SearchSlice';
import { addTaskModalSlice } from '../../Reducers/ModalSlice';

const store = configureStore({
  reducer:{ 
    'todo': toDoSlice.reducer,
    'search': SearchSlice.reducer,
    'addTaskModal': addTaskModalSlice.reducer
  }
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