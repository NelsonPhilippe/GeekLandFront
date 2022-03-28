import * as React from "react";
import "../../css/components/settings/ProfileSettings.css";

export default class ProfileSettings extends React.Component {
  render() {
    return (
      <div className="profile-settings-container">
        <h1>Informations</h1>
        <div className="general-information">
          <h3>Informations générales</h3>
          <div className="block">
            <div className="line-white"></div>
          </div>
        </div>
      </div>
    );
  }
}
