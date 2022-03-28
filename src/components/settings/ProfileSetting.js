import * as React from "react";
import "../../css/components/settings/ProfileSettings.css";

export default class ProfileSettings extends React.Component {
  hello() {
    console.log("Hey !");
  }

  render() {
    return (
      <div className="profile-settings-container">
        <h1>Informations</h1>

        <div className="general-information">
          <h3>Informations générales</h3>

          <div className="block">
            <div className="block-info">
              <p id="titleInformation">Photo</p>
              <div id="click" onClick={this.hello}>
                <p>Ajouter une photo de profile pour votre compte</p>
              </div>
            </div>

            <div className="line-white"></div>
          </div>
        </div>
      </div>
    );
  }
}
