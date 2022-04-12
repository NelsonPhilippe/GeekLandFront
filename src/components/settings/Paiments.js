import * as React from "react";
import "../../css/components/settings/Paiements.css";

export default class Paiements extends React.Component {
  render() {
    return (
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
    );
  }
}
