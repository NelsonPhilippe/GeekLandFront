import * as React from "react";
import "../../css/components/settings/Historiques.css";
import { IoIosArrowDown } from "react-icons/io";

export default class Historiques extends React.Component {
  constructor(props) {
    super(props);

    this.drop = this.drop.bind(this);
  }
  drop() {
    let x = document.getElementById("detail");
    let y = document.getElementsByName("block-commande");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.borderRadius = "10px 10px 0 0";
    } else {
      x.style.display = "none";
    }
  }

  render() {
    return (
      <div>
        <div className="block-commande">
          <p id="date-commande">09/02/2012</p>{" "}
          {/*Ajouter la date du jour de commande en back-end*/}
          <p id="num-commande">032154789654522</p>{" "}
          {/*Ajouter le numéro de commande en back-end*/}
          <p id="price-commande">105.95€</p> {/*Ajouter le prix en back-end*/}
          <p id="livraison">En cours</p>{" "}
          {/*Ajouter le status de la commande en back-end*/}
          <div className="dropdown" onClick={this.drop}>
            <p>Détails</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div id="detail">Salut</div>
      </div>
    );
  }
}
