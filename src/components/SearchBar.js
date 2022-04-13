import './../css/components/SearchBar.css';
import * as React from "react";
import { useNavigate } from 'react-router-dom'

function Search() {

    
    const navigate = useNavigate()


    const handleClick = (e) => {
        navigate(`/search/${ e.target.search.value}`)
    }

    return (
        <div className='search'>


            <img src="/img/loupe_icon.png" alt="loupe" />
            <div id="separator"></div>
            <form onSubmit={handleClick}>

                <input type="text" name="search" placeholder="Search" />
            </form>
        </div>
    );
}


export default Search;