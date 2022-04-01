import * as React from 'react';
import "../css/ForgottenPassword.css"

export default class ForgottenPassword extends React.Component {
    render() {
        return (
            <div className="forgot-pw">

                <div className="forgot-pw-field">
                    <form action="" method="get" className="forgot-pw-form">
                            <h1>Mot de Passe Oublié </h1>
                        <div className="forgot-pw-name">
                            <label for="username-forgot-pw">Entrez votre nom d'utilisateur ou votre adresse mail</label>
                            <input type="text" name="username-forgot-pw" id="username-forgot-pw" placeholder="Entrez votre nom d'utilisateur ou votre adresse mail" required="true" />
                        </div>
                        <div className="sendcode">
                            <button id="sendcode">Envoyer un code de secours</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}