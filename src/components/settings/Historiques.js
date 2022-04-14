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
              <p>Titre du produit</p> {/* Mettre le titre du produit*/}
              <button className="btn-avis-article">DONNER MON AVIS</button>
            </div>
            <p id="article-quantite">x1</p>{" "}
            {/* Mettre la quantité du produit commandé*/}
            <p id="article-price">80€</p> {/* Mettre le prix du produit*/}
          </div>
          <div className="line-gray"></div>
          <div className="info-general">
            <div className="info-user">
              <div className="mode-livraison">
                <p id="mode">Mode de livraison :</p>
                <p id="result-mode">Chronopost express</p>
              </div>
              <div className="adress-user">
                <p>M.Jean Michelle</p>
                <p>4, rue de la boucherie</p>
                <p>59140 Dunkerque</p>
              </div>
              <div className="mode-paiement">
                <p id="mode">Mode de paiement :</p>
                <p id="result-mode">Carte bancaire</p>
              </div>
            </div>
            <div className="price-general">
              <div className="price-port">
                <p id="title-port">Frais de port :</p>
                <p id="price-port">13.95€</p>
              </div>
              <div className="price-total">
                <p id="title-total">Total de la commande :</p>
                <p id="price-total">90,90€</p>{" "}
                {/* Mettre le prix total de la commande (frais de port + prix article)*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
