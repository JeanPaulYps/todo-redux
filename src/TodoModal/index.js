import React from 'react';
import ReactDom from 'react-dom';
import  { Modal } from './Modal'


function TodoModal (props)
{
    return ReactDom.createPortal(
        <Modal setOpenModal = {props.setOpenModal} /> ,
        document.getElementById('Modal')
    );   
}

export { TodoModal, };