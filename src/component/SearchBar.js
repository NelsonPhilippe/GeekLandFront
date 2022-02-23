import './../css/components/SearchBar.css';
import * as React from "react";


function search() {
    return (
        <div className='search'>


            <img src="/img/loupe_icon.png" alt="loupe" />
            <div id="separator"></div>
            <form>

                <input type="text" name="search" placeholder="Search" />
            </form>
        </div>
    );
}


export default search;