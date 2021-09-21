import { createSlice } from "@reduxjs/toolkit";

const todosLocalStorageName = 'TODOS_V1';

const saveNewTodoList = (state) => 
{
    const newTodos = state.todoList;
    localStorage.setItem(todosLocalStorageName, JSON.stringify(newTodos));
}

const toDoSlice = createSlice({
    name: 'todoList',
    initialState: {
        todoList:  [{
            description: "Esta es una tarea de prueba",
            completed: false,
            id: 0
        }, ]
    },
    reducers: {
        checkTask (state, action) {
            const index = action.payload;
            const todoIsComplete = state.todoList[index].completed;
            state.todoList[index].completed = !todoIsComplete;

            saveNewTodoList(state);
        },
        deleteTask(state, action) {
            const index = action.payload;
            state.todoList.splice(index, 1);

            saveNewTodoList(state);
        }
    }

})

export { toDoSlice, }