import './TodoTask.css'


function TodoTask(props) {

    return (
            <div className="Task">
                <img src={process.env.PUBLIC_URL + '/checkIcon.svg'} alt="" className="Task__CheckIcon" onClick={ () => props.markTaskAsDone(props.taskDescription) }/>
                <input class="Task__Check" type="checkbox" value="" checked={props.isDone}/>
                <div className="Task__Description">
                    <p>{props.taskDescription}</p>
                </div>
                <img src={process.env.PUBLIC_URL + '/deleteIcon.svg'} alt="" width="10px" className="Task__DeleteIcon" />
            </div>
        
    );
};

export { TodoTask, };