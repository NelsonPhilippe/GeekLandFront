import * as React from "react";
import "../css/Fieldlogin.css";

export default class Fieldlogin extends React.Component {
  render() {
    return (
      <div className="connexion">
        <div className="fieldlogin">
          <form action="" method="get" className="connexion-form">
            <div className="id">
              <label for="login">Identifiant</label>
              <input
                type="text"
                id="login"
                name="login"
                placeholder="Enter your mail adress"
                required="true"
              />
              <div className="remember">
                <input type="checkbox" id="check-login" name="login" />
                <label id="check-login-label" for="login">
                  Se souvenir de moi
                </label>
              </div>
            </div>

            <div className="password">
              <label for="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                required="true"
              />
              <label id="password-label" for="password">
                Mot de passe oublier?
              </label>
            </div>

            <div className="submit">
              <button id="submit">Connexion </button>
              <a href="">Créer un nouveau compte</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
