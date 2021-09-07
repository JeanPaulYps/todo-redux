import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch (){

    const { setOpenModal, searchTodos, searchedTodos } = React.useContext(TodoContext);
    
    const onClickButton = ()=>
    {
        setOpenModal( prevState => !prevState )
    }

    const onChangeInSearch = (event) =>
    {
        searchTodos(event.target.value);
        console.log(searchedTodos);
        console.log(event);
    }

    return (
        <div className="Search" id="test">
            <div className="Search__Form" >
                <img src={process.env.PUBLIC_URL + "/searchIcon.svg"} alt="" className="Search__Icon"/>
                <input type="search" id="SearchForm" className="Search__Input" placeholder="Busca tu tarea aquí" onChange = {onChangeInSearch} />
            </div>
            <img src={process.env.PUBLIC_URL + "/plusIcon.svg"} alt="" className="Search__PlusButton" id="AddButton" onClick = {onClickButton} />
        </div>
    );
}

export { TodoSearch, };
