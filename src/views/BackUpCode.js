import * as React from 'react';
import "../css/BackUpCode.css"

export default class BackUpCode extends React.Component {
    render() {
        return (
            <div className="backupcode">

                <div className="backupcode-field">
                    <form action="" method="get" className="backupcode-form">
                            <h1>Mot de Passe Oublié </h1>
                        <div className="backup-code">
                            <label for="backupcode-code">Entrez votre code</label>
                            <input type="text" name="backupcode-code" id="backupcode-code" placeholder="Entrez votre code" required="true" />
                            <a href="">Envoyer un nouveau code</a>
                        </div>
                        <div className="send">
                            <button id="send">Envoyer</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}