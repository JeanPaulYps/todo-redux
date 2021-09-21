import React from 'react';

const TodoContext = React.createContext();

function TodoProvider (props)
{
    let initialTodoList = [];
    const todosLocalStorageName = 'TODOS_V1';
    if (localStorage.getItem(todosLocalStorageName) === null)
    {
      localStorage.setItem(todosLocalStorageName, "[]");
    } else 
    {
      initialTodoList = localStorage.getItem(todosLocalStorageName); 
      initialTodoList = JSON.parse(initialTodoList);
    }

    const [todos, setTodos] = React.useState( initialTodoList );
  
    const [openModal, setOpenModal ] = React.useState(false);
  
    const checkTask = (taskDescription)=>{
        const indexOfTask = todos.findIndex(todo => todo.description === taskDescription);
        const statusOftask = todos[indexOfTask].completed;
        let newTodos = [...todos];
        newTodos[indexOfTask].completed = !statusOftask;
        setTodos(newTodos);
        localStorage.setItem(todosLocalStorageName, JSON.stringify(newTodos));
    }

    const deleteTask = (taskDescription)=>{
      let newTodos = todos.filter((todo) => todo.description !== taskDescription);
      setTodos(newTodos);
      localStorage.setItem(todosLocalStorageName, JSON.stringify(newTodos));
    }

    const addTask = (taskDescription) => 
    {
        const newTodo = {
            description: taskDescription,
            completed: false
        }
        let newTodos = [...todos, newTodo]
        setTodos(newTodos);
        localStorage.setItem(todosLocalStorageName, JSON.stringify(newTodos));
    }

    const [searchText, setSearchText] = React.useState('');

    const searchedTodos = todos.filter((todo) => todo.description.toLowerCase().includes(searchText.toLowerCase()));


    const completedTodos = todos.filter( Todo => Todo.completed).length;
    const totalTodos = todos.length;

    return(
        <TodoContext.Provider value = { {
          completedTodos,
          totalTodos,
          openModal,
          setOpenModal,
          todos,
          setTodos,
          checkTask,
          deleteTask,
          searchText,
          setSearchText,
          searchedTodos,
          addTask
        } }>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };