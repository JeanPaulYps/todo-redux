import React from 'react';
import './todoCounter.css';

function TodoCounter ( {todosList} ){
    const totalTodos = todosList.length;
    const completedTodos = todosList.filter( todo => todo.completed).length;

    return (
        <h1 class="Title">Haz completado {completedTodos} de {totalTodos} tareas </h1>
    );
}

export { TodoCounter, };
