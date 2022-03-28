import * as React from 'react';
import "../css/components/Register.css"
export default class Register extends React.Component {
    render() {
        return (
            <div className="register">

                <div className="fieldreg">

                    <form action="" method="get" className="register-form">

                        <div className="username">
                            <label for="login">Nom d'utilisateur</label>
                            <input type="text" id="login" name="login" placeholder="Enter your username" required="true" />
                        </div>

                        <div className="pw">
                            <label for="password">Mot de passe</label>
                            <input type="password" id="password" name="password" placeholder="Enter your Password" required="true" />
                        </div>

                        <div className="email">
                            <label for="mailadress">Adresse Mail</label>
                            <input type="email" id="mailadress" name="mailadress" placeholder="Enter your mail" required="true" />
                        </div>

                        <div className="name">
                            <label for="name">Nom</label>
                            <input type="text" id="name" name="name" placeholder="Enter your Name" required="true" />

                            <label for="surname">Prénom</label>
                            <input type="text" id="surname" name="surname" placeholder="Enter your surname" required="true" />
                        </div>

                        <div className="adress">
                            <label for="adress">Adresse</label>
                            <input type="text" id="adress" name="adress" placeholder="Enter your address" required="true" />
                        </div>

                        <div className="city">
                            <label for="postalcode">Code Postal</label>
                            <input type="tel" id="postalcode" name="postalcode" placeholder="Enter your postalcode" required="true" />

                            <label for="city">Ville</label>
                            <input type="text" id="country" name="country" placeholder="Enter your country" required="true" />
                        </div>

                        <div className="country">
                            <label for="country">Pays</label>
                            <input type="text" id="country" name="country" placeholder="Enter your country" required="true" />
                        </div>

                        <div class="tel">
                            <label for="phone">Téléphone</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required="false" />
                        </div>

                        <div className="reg">
                            <button id="reg">Inscription</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}