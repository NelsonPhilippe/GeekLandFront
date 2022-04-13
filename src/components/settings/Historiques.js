import * as React from "react";
import "../../css/components/settings/Historiques.css";
import { IoIosArrowDown } from "react-icons/io";

export default class Historiques extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibilty_detail: false,
    };

    this.drop = this.drop.bind(this);
  }
  drop() {
    let visibility = this.state.visibilty_detail;

    if (visibility) {
      return this.setState({
        visibilty_detail: false,
      });
    }
    this.setState({
      visibilty_detail: true,
    });
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
        {/* {this.state.visibilty_detail ? this.}  */}
        <div id="detail">
          <div className="article-commande">
            <div className="article-img">
              <img
                src="/img/product/Tanjiro Hinokami.jpg"
                alt="Nom du produit"
                title="Titre du produit"
              />{" "}
              {/* Mettre l'image du produit*/}
            </div>
            <div className="article-title">
              <h4>Titre du produit</h4> {/* Mettre le titre du produit*/}
              <button className="btn-avis-article">DONNER MON AVIS</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
