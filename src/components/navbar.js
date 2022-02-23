import * as React from "react";
import './../css/components/Nav.css'
import { Link } from "react-router-dom";
import Search from './SearchBar'
import Profile from './ProfileMenu'

function Navbar() {


    function hoverProfile(status) {
        let profile = document.getElementById('menu-profile');

        if (status) {
            profile.style.visibility = 'hidden';
            return;
        }

        profile.style.visibility = 'visible';

    }

    return (
        <div className='Nav'>
            <Link id='logo' to='/'><img src="/img/logo.png" alt="logo" /></Link>
            <Search />
            <img id="menu" src='/img/Menu.png' alt='menu_btn' />
            <img id="profile" src='/img/profile.png' alt='profile_btn'
            onMouseEnter={() => hoverProfile(false)}
            onMouseLeave={() => hoverProfile(true)}
            />
            <Profile />
        </div>
    );
}

export default Navbar;