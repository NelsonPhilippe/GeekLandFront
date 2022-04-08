import * as React from "react";
import "../../css/components/settings/Historique.css";
import { IoIosArrowDown } from "react-icons/io";

export default class Historique extends React.Component {
  render() {
    return (
      <div className="historique-container">
        <h1>Historique de vos achats</h1>
        <div className="historique-general">
          <div className="block-commande">
            <p id="date-commande">09/02/2012</p>{" "}
            {/*Ajouter la date du jour de commande en back-end*/}
            <p id="num-commande">032154789654522</p>{" "}
            {/*Ajouter le numéro de commande en back-end*/}
            <p id="price-commande">105.95€</p> {/*Ajouter le prix en back-end*/}
            <p id="livraison">En cours</p>{" "}
            {/*Ajouter le status de la commande en back-end*/}
            <div className="dropdown">
              <p>Détails</p>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
