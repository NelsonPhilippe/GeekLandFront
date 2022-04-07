import * as React from "react";
import "../../css/components/settings/Historique.css";

export default class Historique extends React.Component {
  render() {
    return (
      <div className="historique-container">
        <h1>Historique de vos achats</h1>
        <div className="historique-general"></div>
      </div>
    );
  }
}
