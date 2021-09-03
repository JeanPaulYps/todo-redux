import { TodoTask } from '../TodoTask';
import './TodoTaskList.css'

function TodoTaskList (props){
    return(
        <div className="TasksContainer">
            <TodoTask  taskDescription = {props.todoTask.description} />
        </div>
    )
}

export { TodoTaskList, };