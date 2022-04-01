import * as React from 'react';
import "../css/Register.css"
export default class Register extends React.Component {
    render() {
        return (
            <div className="register">

                <div className="fieldreg">

                    <form action="" method="get" className="register-form">

                        <div className="username">
                            <label for="login">Nom d'utilisateur: </label>
                            <input type="text" id="login-register" name="login" placeholder="Username" required="true" />
                        </div>

                        <div className="pw">
                            <label for="password">Mot de passe: </label>
                            <input type="password" id="password-register" name="password" placeholder="Password" required="true" />
                        </div>

                        <div className="email">
                            <label for="mailadress">Adresse Mail: </label>
                            <input type="email" id="mailadress" name="mailadress" placeholder="E-mail" required="true" />
                        </div>

                        <div className="name">
                            <div className="nam">
                                <label for="name">Nom: </label>
                                <input type="text" id="name" name="name" placeholder="Name" required="true" />
                            </div>
                            <div className="surn">
                                <label for="surname">Prénom: </label>
                                <input type="text" id="surname" name="surname" placeholder="Surname" required="true" />
                            </div>
                        </div>

                        <div className="adress">
                            <label for="adress">Adresse: </label>
                            <input type="text" id="adress" name="adress" placeholder="Address" required="true" />
                        </div>

                        <div className="city">
                            <div className="pc">
                                <label for="postalcode">Code Postal: </label>
                                <input type="tel" id="postalcode" name="postalcode" placeholder="Postal code" required="true" />
                            </div>
                            <div className="cit">
                                <label for="city">Ville: </label>
                                <input type="text" id="city" name="city" placeholder="City" required="true" />
                            </div>
                        </div>

                        <div className="country">
                            <label for="country">Pays: </label>
                            <input type="text" id="country" name="country" placeholder="Country" required="true" />
                        </div>

                        <div class="tel-news">
                            <div className="tel">
                                <label for="phone">Téléphone: </label>
                                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required="false" />
                            </div>
                        </div>
                        
                        <div className="news-letter">
                            <input type="checkbox" id="check-news" name="login" />
                            <label id="check-news-label" for="login">S'abonner à la Newsletter</label>
                        </div>

                        <div className="reg">
                            <button id="reg">Créer un compte</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}