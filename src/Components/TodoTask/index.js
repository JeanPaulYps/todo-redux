import React from 'react';
import './TodoTask.css'
import { useDispatch } from 'react-redux';
import { toDoSlice } from '../../Reducers/ToDoSlice'

function TodoTask({taskDescription, taskIsDone, taskId}) {
    const { checkTask, deleteTask } = toDoSlice.actions;
    const dispatch = useDispatch();
    return (
        <div className="Task">
                { console.log( toDoSlice.actions) }
                <img src={process.env.PUBLIC_URL + '/checkIcon.svg'} alt="" className="Task__CheckIcon" onClick={ () => dispatch(checkTask(taskId)) }/>
                <input class="Task__Check" type="checkbox" value="" checked={taskIsDone}/>
                <div className="Task__Description">
                    <p>{taskDescription}</p>
                </div>
                <img src={process.env.PUBLIC_URL + '/deleteIcon.svg'} alt="" width="10px" className="Task__DeleteIcon" onClick = {() => dispatch(deleteTask(taskId))} />
            </div>
        
    );
};

export { TodoTask, };