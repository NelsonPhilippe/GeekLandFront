import * as React from "react";
import "../../css/components/settings/FAQ.css";
import { IoIosArrowForward } from "react-icons/io";

export default class FAQ extends React.Component {
  link() {
    console.log("lien");
  }

  render() {
    return (
      <div className="container-FAQ">
        <h1>Foire Aux Questions</h1>

        <div className="container-div">
          <div id="articleDef" onClick={this.link}>
            <p>Un article est défectueux ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p>Un article ne vous convient pas ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p>Vous souhaitez vous faire rembourser ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p>Un problème dans votre commande ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p>Je n’arrive pas à me connecter ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p>Politique de retour</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p>Autre chose? Contactez nous</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
