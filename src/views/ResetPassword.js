import * as React from 'react';
import "../css/ResetPassword.css"

export default class ResetPassword extends React.Component {
    render() {
        return (
            <div className="reset-pw">

                <div className="reset-pw-field">
                    <form action="" method="get" className="reset-pw-form">
                            <h1>Réinitialisez votre Mot de Passe </h1>
                        <div className="new-pw-1">
                            <label for="new-pw-1">Entrez votre nouveau Mot de Passe</label>
                            <input type="text" name="new-pw-1" id="new-pw-1" placeholder="Entrez votre nouveau Mot de Passe" required="true" />
                        </div>
                        <div className="new-pw-2">
                            <label for="new-pw-2">Confirmez votre nouveau Mot de Passe</label>
                            <input type="text" name="new-pw-2" id="new-pw-2" placeholder="Confirmez votre nouveau Mot de Passe" required="true"/>
                        </div>
                        <div className="reset">
                            <button id="reset">Réinitialiser le Mot de Passe</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
