import React from 'react';
import { Link } from "react-router-dom";

import './../css/components/ProfileMenu.css'

export default class ProfileMenu extends React.Component {


    render() {
        return (
            <div className="menu-profile" id='profile-menu'>
                <div className='nav-profile'>
                    <Link className='link-nav' to='/settings/profilesetting'><h4>Profile</h4></Link>
                    <div id='profile-nav-separator'></div>
                    <Link className='link-nav' to='/login'><h4>Panier</h4></Link>
                    <div id='profile-nav-separator'></div>
                    <Link className='link-nav' to='/login'><h4>Historique d'Achats</h4></Link>
                    <div id='profile-nav-separator'></div>
                    <Link className='link-nav' to='/login'><h4>Commande en cours</h4></Link>
                    <div id='profile-nav-separator'></div>
                    <Link className='link-nav' to='/login'><h4>Support</h4></Link>
                </div>
            </div>
        );
    }

}