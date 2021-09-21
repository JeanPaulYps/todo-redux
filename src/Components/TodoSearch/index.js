import React from 'react';
import './TodoSearch.css'
import { SearchSlice } from '../../Reducers/SearchSlice';
import { useDispatch } from 'react-redux';
import { addTaskModalSlice } from '../../Reducers/ModalSlice';

function TodoSearch (){
    const dispatch = useDispatch();
    const { updateSearchText } = SearchSlice.actions;
    const { changeVisibilityOfModal } = addTaskModalSlice.actions;
    
    const showModal = ()=>
    {
        dispatch( changeVisibilityOfModal());
    }

    const handleSearchChange = (event) =>
    {
        const newSearchText = event.target.value;
        dispatch( updateSearchText(newSearchText) );
    }

    return (
        <div className="Search" id="test">
            <div className="Search__Form" >
                <img src={process.env.PUBLIC_URL + "/searchIcon.svg"} alt="" className="Search__Icon"/>
                <input type="search" id="SearchForm" className="Search__Input" placeholder="Busca tu tarea aquí" onChange = {handleSearchChange } />
            </div>
            <img src={process.env.PUBLIC_URL + "/plusIcon.svg"} alt="" className="Search__PlusButton" id="AddButton" onClick = {showModal} />
        </div>
    );
}

export { TodoSearch, };
