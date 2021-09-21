import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoModal } from '../TodoModal';
import { TodoTaskList } from '../TodoTaskList';
import React from 'react';
import { useSelector } from 'react-redux';

function AppUI() {

    const todosList = useSelector(state => state.todo.todoList );
    const searchText = useSelector(state => state.search.text);
    const modalIsOpen = useSelector(state => state.addTaskModal.modalIsOpen);
   
    const searchedTodos = todosList.filter((todo) => todo.description.toLowerCase().includes(searchText.toLowerCase()));


    return (
        <div>
            <TodoCounter todosList = {todosList} />
            <TodoSearch />

            {
                searchedTodos.map( (todo) => {
                    return <TodoTaskList todoTask={todo}/>;
                })
            }

            {modalIsOpen && <TodoModal />}
        </div>
    );
};

export { AppUI, };