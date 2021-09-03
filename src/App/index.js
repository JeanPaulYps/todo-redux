import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';

function App ()
{
  const Todos = [ 
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
        doneTodos = { Todos.filter( Todo => Todo.completed).length } 
      />
      <TodoSearch/>
    </div>
  );
};

export { App, } ;