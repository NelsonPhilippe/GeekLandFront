import * as React from "react";
import './../css/components/Nav.css'
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'
import Profile from './ProfileMenu'

function Navbar() {


    function hoverProfile() {
        let profile = document.getElementById('menu-profile');


        if(profile.style.visibility == "visible"){
            profile.style.visibility = "hidden";
            return;
        }


        profile.style.visibility = 'visible';

    }

    return (
        <div className='Nav'>
            <Link id='logo' to='/'><img src="/img/logo.png" alt="logo" /></Link>
            <SearchBar />
            <img id="menu" src='/img/Menu.png' alt='menu_btn' />
            <img id="profile" src='/img/profile.png' alt='profile_btn'
            onClick={() => hoverProfile()}

            />
            <Profile />
        </div>
    );
}

export default Navbar;