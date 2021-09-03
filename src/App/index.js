import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoTaskList } from '../TodoTaskList';

function App ()
{
  const todos = [ 
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
  ];

  return(
    <div>
      <TodoCounter
        doneTodos = { todos.filter( Todo => Todo.completed).length } 
        totalTodos = { todos.length }
      />
      <TodoSearch/>
      {
        todos.map( (todo) => {
          return <TodoTaskList todoTask = {todo}/>;
        })
      }
      
    </div>
  );
};

export { App, } ;