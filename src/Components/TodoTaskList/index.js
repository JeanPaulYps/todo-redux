import { TodoTask } from '../TodoTask';
import './TodoTaskList.css'

function TodoTaskList ({ todoTask: { description, completed, id}}){
    return(
        <div className="TasksContainer">
            <TodoTask  taskDescription = {description} taskIsDone = {completed} taskId = {id} />
        </div>
    )
}

export { TodoTaskList, };