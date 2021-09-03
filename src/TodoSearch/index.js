import './TodoSearch.css'

function TodoSearch (){
    return (
        <div className="Search" id="test">
            <div className="Search__Form" >
                <img src={process.env.PUBLIC_URL + "/searchIcon.svg"} alt="" className="Search__Icon"/>
                <input type="search" id="SearchForm" className="Search__Input" placeholder="Busca tu tarea aquí"/>
            </div>
            <img src={process.env.PUBLIC_URL + "/plusIcon.svg"} alt="" className="Search__PlusButton" id="AddButton"/>
        </div>
    );
}

export { TodoSearch, };
