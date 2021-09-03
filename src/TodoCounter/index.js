import './todoCounter.css'

function TodoCounter (props){
    return (
        <h1 class="Title">Haz completado 3 de 4 tareas. {props.doneTodos} </h1>
    );
}

export { TodoCounter, };
