import React from 'react';
import { Link } from "react-router-dom";

import './../css/components/ProfileMenu.css'

export default class ProfileMenuNC extends React.Component {


    render() {
        return (
            <div className="menu-profile-nc" id='profile-menu'>
                <div className='nav-profile'>
                    <Link className='link-nav' to='/register'><h4>Inscription</h4></Link>
                    <div id='profile-nav-separator'></div>
                    <Link className='link-nav' to='/login'><h4>Connexion</h4></Link>
                </div>
            </div>
        );
    }

}