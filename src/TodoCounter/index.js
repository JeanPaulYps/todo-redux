import React from 'react';
import { TodoContext } from '../TodoContext';
import './todoCounter.css'

function TodoCounter (){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h1 class="Title">Haz completado {completedTodos} de {totalTodos} tareas </h1>
    );
}

export { TodoCounter, };
