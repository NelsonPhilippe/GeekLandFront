import * as React from "react";
import "./../css/components/Faq.css";
import { IoIosArrowForward } from "react-icons/io";

export default class FAQ extends React.Component {
  link() {
    console.log("lien");
  }

  render() {
    return (
      <div className="container-FAQ">
        <h2>Foire Aux Questions</h2>

        <div className="container-div">
          <div id="articleDef" onClick={this.link}>
            <p id="articleP">Un article est défectueux</p>
            <div className="iconArticle">
              <IoIosArrowForward size={40} color="#2E86C1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
