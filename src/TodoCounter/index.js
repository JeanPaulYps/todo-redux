import './todoCounter.css'

function TodoCounter (props){
    return (
        <h1 class="Title">Haz completado {props.doneTodos} de {props.totalTodos} tareas </h1>
    );
}

export { TodoCounter, };
