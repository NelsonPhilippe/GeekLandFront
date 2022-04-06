import * as React from "react";
import "../../css/components/settings/Paiement.css";

export default class Paiement extends React.Component {
  // Faire des variable + if si l'utilisateur a ou
  //n'a pas encore de carte de paiement ajouter à son profil

  render() {
    return (
      <div className="paiement-container">
        <h1>Paiement</h1>
        <div className="paiement-general">
          <div className="container-card">
            <h2>Moyen de paiement</h2>
            <div className="card">
              <div className="number-card">
                <p>Numéro de Carte</p>
                <p>**** **** **** 0000</p>
                {/*Mettre le numéro de carte déjà enregistré */}
              </div>
              <div className="line-div"></div> {/*Séparation entre les div*/}
              <div className="expiration">
                <p>Expiration :</p>
                <p>01/24</p>{" "}
                {/*Mettre la data d'expiration de la carte déjà enregistré */}
              </div>
              <div className="line-div"></div> {/*Séparation entre les div*/}
              <button type="button" className="sup-card">
                Supprimer
              </button>
            </div>
          </div>

          <div className="new-card">
            <h2>Ajouter un moyen de paiement</h2>
            <form id="add-card" method="post" action="/">
              <div className="card-on-name">
                <label>Nom et Prénom du titulaire :</label>
                <input type="text" id="name-card" placeholder="Nom et Prénom" />
              </div>
              <div className="line-div"></div> {/*Séparation entre les div*/}
              <div className="add-number-card">
                <label>Numéro de carte :</label>
                {/*Regarder pour faire des input pour add numéro de la carte*/}
              </div>
              <div className="line-div"></div> {/*Séparation entre les div*/}
              <div className="date-expiration">
                <label>Date d'expiration :</label>
                {/*Regarder pour faire des input pour add date d'expiration de la carte*/}
              </div>
              <div className="line-div"></div> {/*Séparation entre les div*/}
              <input type="submit" id="btn-add-card" value="Ajouter" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
