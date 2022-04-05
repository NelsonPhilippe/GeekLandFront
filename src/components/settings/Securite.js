import * as React from "react";
import "../../css/components/settings/Securite.css";

export default class Securite extends React.Component {
  render() {
    return (
      <div className="securite-container">
        <h1>Sécurité</h1>
        <div className="securite-general">
          <h2>Sécurité du compte</h2>
          <div className="secu">
            <div className="double-identification">
              <p>A2F</p>
              <button type="button" className="A2F">
                Activer l'authentification à double facteur
              </button>
            </div>
            <div className="line-black"></div>
            <div className="last-connexion">
              <p>Dernière connexion le :</p>
              <p>17/02/2022</p>
            </div>
          </div>

          <button type="button" className="supression">
            Suprimer le compte
          </button>
        </div>
      </div>
    );
  }
}
