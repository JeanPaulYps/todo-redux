import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoContext } from '../TodoContext';
import { TodoModal } from '../TodoModal';
import { TodoTaskList } from '../TodoTaskList';
import React from 'react';
import { useSelector } from 'react-redux';

function AppUI() {
    const { openModal,
        setOpenModal,
        searchedTodos,
        checkTask
    } = React.useContext(TodoContext);

    const todosList = useSelector(state => state.todo.todoList );



    return (
        <div>
            <TodoCounter />
            <TodoSearch />
    
            {/* {
                searchedTodos.map( (todo) => {
                    return <TodoTaskList todoTask={todo} markTaskAsDone={checkTask} />;
                })
            } */}
            { console.log(todosList) }
            {
                todosList.map( (todo) => {
                    return <TodoTaskList todoTask={todo} markTaskAsDone={checkTask} />;
                })
            }

            {openModal && <TodoModal setOpenModal={setOpenModal} />}
        </div>
    );
};

export { AppUI, };