import React from 'react';
import ReactDom from 'react-dom';
import  { Modal } from './Modal'


function TodoModal ()
{
    return ReactDom.createPortal(
        <Modal /> ,
        document.getElementById('Modal')
    );   
}

export { TodoModal, };