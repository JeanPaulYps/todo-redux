import { createSlice } from "@reduxjs/toolkit";

const todosLocalStorageName = 'TODOS_V1';
let initialTodoList = [];

const saveNewTodoList = (state) => 
{
    const newTodos = state.todoList;
    localStorage.setItem(todosLocalStorageName, JSON.stringify(newTodos));
}


if (localStorage.getItem(todosLocalStorageName) === null)
{
  localStorage.setItem(todosLocalStorageName, "[]");
} else 
{
  initialTodoList = localStorage.getItem(todosLocalStorageName); 
  initialTodoList = JSON.parse(initialTodoList);
}


const toDoSlice = createSlice({
    name: 'todoList',
    initialState: {
        todoList: initialTodoList
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
        },
        addTask (state, action) {
            const newTodo = {
                description: action.payload,
                completed: false,
                id: state.todoList.length
            }
            state.todoList.push(newTodo);
            
            saveNewTodoList(state);
        }
    }

})

export { toDoSlice, }