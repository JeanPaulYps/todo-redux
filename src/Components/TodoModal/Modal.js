import React from 'react';
import { useDispatch } from 'react-redux';
import './Modal.css';
import { addTaskModalSlice } from '../../Reducers/ModalSlice';
import { toDoSlice } from '../../Reducers/ToDoSlice';


function Modal() {
    // const {addTask} = React.useContext(TodoContext);
    const [taskDescription, setTaskDescription ]= React.useState('');
    
    const dispatch = useDispatch();
    const { changeVisibilityOfModal } = addTaskModalSlice.actions;
    const { addTask } = toDoSlice.actions;

    const onClickCloseButton = () => 
    {
       dispatch(changeVisibilityOfModal());
    }

    const handleSubmit = (event) => 
    {
        dispatch(addTask(taskDescription));
        dispatch(changeVisibilityOfModal());
    }

    const saveTaskDescription = (event) =>
    {
        setTaskDescription(event.target.value);
    }


    return (
        <div className="Modal" id="modal" >
            <div className="Modal__Content">
                <img src={process.env.PUBLIC_URL + "/closeButton.svg"} alt="" onClick= { onClickCloseButton } className="Modal__CloseButtonIcon"/>
                <div className="CreateTodo">
                    <p className="CreateTodo__Title">Escribe un nuevo To-Do</p>
                    <form onSubmit={addTask}> 
                        <textarea className="CreateTodo__TextArea" name="todoDescription" onChange={saveTaskDescription}>
                        </textarea>
                        <div className="CreateTodo__Buttons">
                            <button className="CreateTodo__Cancel" type="button" onClick={ onClickCloseButton }>Cancelar</button>
                            <button className="CreateTodo__Accept" type="button" onClick={ handleSubmit }  > Agregar tarea </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Modal, };