import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoTaskList } from '../TodoTaskList';
import { TodoModal } from '../TodoModal'
import React from 'react';

function App ()
{

  const [todos, setTodos] = React.useState(
    [ 
      {
        description: "Cortar cebollas",
        completed: false
      },
      {
        description: "Sacar basura",
        completed: false
      },
      {
        description: "Sacar el perro",
        completed: true
      },
    ]
  )

  const [openModal, setOpenModal ] = React.useState(true);

  /*const checkTask = () => {
    function changeValue (taskDescription)
    {
      console.log(taskDescription)
      const indexOfTask = todos.findIndex(todo => todo.description === taskDescription);
      //const statusOftask = todos[indexOfTask].completed;
     // todos[indexOfTask].completed = !statusOftask;
      console.log(indexOfTask);
      console.log(todos);
      console.log("click")
    }
    return changeValue;
  }*/

  const checkTask = (taskDescription)=>{
      const indexOfTask = todos.findIndex(todo => todo.description === taskDescription);
      const statusOftask = todos[indexOfTask].completed;
      let newTodos = [...todos];
      newTodos[indexOfTask].completed = !statusOftask;
      setTodos(newTodos);
  }

  return(
    <div>
      <TodoCounter
        doneTodos = { todos.filter( Todo => Todo.completed).length } 
        totalTodos = { todos.length }
      />

      <TodoSearch openModal = {openModal} setOpenModal = {setOpenModal}/>

      {
        todos.map( (todo) => {
          return <TodoTaskList todoTask = {todo} markTaskAsDone = {checkTask} />;
        })
      }

      {openModal && <TodoModal setOpenModal={setOpenModal} />}
      
    </div>
  );
};

export { App, } ;