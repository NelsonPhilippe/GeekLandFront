import * as React from "react";
import './../css/components/ProfileMenu.css'

function MenuProfile(){
    return (
        <div className="menu-profile" id="menu-profile">
            <h4>Inscription</h4>
            <div id="profile-separator"></div>
            <h4>Connexion</h4>
        </div>
    );
}

export default MenuProfile;