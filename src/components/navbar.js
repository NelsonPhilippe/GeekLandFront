import * as React from "react";
import './../css/components/nav.css'
import { Link } from "react-router-dom";
import Search from './../components/SearchBar'

function Navbar() {
    return (
        <div className='Nav'>
            <Link id='logo' to='/'><img  src="/img/logo.png" alt="logo" /></Link>
            <Search />
            <img id="menu" src='/img/Menu.png' alt='menu_btn' />
            <img id="profile" src='/img/profile.png' alt='profile_btn' />
        </div>
    );
}

export default Navbar;