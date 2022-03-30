import * as React from "react";
import "./../css/components/FAQ.css";
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
            <p id="articleP">Un article est défectueux ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p id="articleP">Un article ne vous convient pas ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p id="articleP">Vous souhaitez vous faire rembourser ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p id="articleP">Un problème dans votre commande ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p id="articleP">Je n’arrive pas à me connecter ?</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p id="articleP">Politique de retour</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>

          <div id="articleDef" onClick={this.link}>
            <p id="articleP">Autre chose? Contactez nous</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
