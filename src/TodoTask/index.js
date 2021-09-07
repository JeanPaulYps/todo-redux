import { TodoContext } from '../TodoContext';
import React from 'react';
import './TodoTask.css'

function TodoTask(props) {
    const { checkTask, deleteTask } = React.useContext(TodoContext);
    return (
            <div className="Task">
                <img src={process.env.PUBLIC_URL + '/checkIcon.svg'} alt="" className="Task__CheckIcon" onClick={ () => checkTask(props.taskDescription) }/>
                <input class="Task__Check" type="checkbox" value="" checked={props.isDone}/>
                <div className="Task__Description">
                    <p>{props.taskDescription}</p>
                </div>
                <img src={process.env.PUBLIC_URL + '/deleteIcon.svg'} alt="" width="10px" className="Task__DeleteIcon" onClick = {() => deleteTask(props.taskDescription)} />
            </div>
        
    );
};

export { TodoTask, };