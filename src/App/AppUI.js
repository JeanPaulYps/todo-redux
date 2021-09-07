import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoContext } from '../TodoContext';
import { TodoModal } from '../TodoModal';
import { TodoTaskList } from '../TodoTaskList';
import React from 'react';

function AppUI() {
    const { openModal,
        setOpenModal,
        todos,
        checkTask
    } = React.useContext(TodoContext);



    return (
        <div>
            <TodoCounter />
            <TodoSearch />
    
            {todos.map( (todo) => {
                    return <TodoTaskList todoTask={todo} markTaskAsDone={checkTask} />;
                })
            }
            {openModal && <TodoModal setOpenModal={setOpenModal} />}
        </div>
    );
};

export { AppUI, };