import './Modal.css';

function Modal(props) {
    const onClickCloseButton = () => 
    {
        props.setOpenModal( prevState => !prevState )
    }

    return (
        <div className="Modal" id="modal">
            <div className="Modal__Content">
                <img src={process.env.PUBLIC_URL + "/closeButton.svg"} alt="" onClick= { onClickCloseButton } className="Modal__CloseButtonIcon"/>
                <div className="CreateTodo">
                    <p className="CreateTodo__Title">Escribe un nuevo To-Do</p>
                    <textarea className="CreateTodo__TextArea">
                    </textarea>
                    <div className="CreateTodo__Buttons">
                        <button className="CreateTodo__Cancel" type="button">Cancelar</button>
                        <button className="CreateTodo__Accept" type="button">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal, };