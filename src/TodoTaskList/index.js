import { TodoTask } from '../TodoTask';
import './TodoTaskList.css'

function TodoTaskList (props){
    return(
        <div className="TasksContainer">
            <TodoTask  taskDescription = {props.todoTask.description} isDone = {props.todoTask.completed} markTaskAsDone = {props.markTaskAsDone} />
        </div>
    )
}

export { TodoTaskList, };