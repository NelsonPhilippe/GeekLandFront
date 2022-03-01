import React from 'react';
import { Link } from "react-router-dom";

import './../css/components/ProfileMenu.css'

export default class ProfileMenuNC extends React.Component {


    render() {
        return (
            <div className="menu-profile none">
                <Link to='/subscribe'><h4>Inscription</h4></Link>
                <div></div>
                <h4>Se connecter</h4>
            </div>
        );
    }

}