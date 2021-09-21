import React from 'react';
import { TodoContext } from '../TodoContext';
import './Modal.css';

function Modal(props) {
    const {addTask} = React.useContext(TodoContext);
    const [taskDescription, setTaskDescription ]= React.useState('');

    const onClickCloseButton = () => 
    {
        props.setOpenModal( prevState => !prevState )
    }

    const handleSubmit = (event) => 
    {
        addTask(taskDescription);
        props.setOpenModal( prevState => !prevState);
        
    }

    const saveTaskDescription = (event) =>
    {
        setTaskDescription(event.target.value);
    }


    return (
        <div className="Modal" id="modal">
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