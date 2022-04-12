import * as React from "react";
import "../../css/components/settings/Historique.css";
import Historiques from "./Historiques";
export default class Historique extends React.Component {
  drop() {}
  render() {
    return (
      <div className="historique-container">
        <h1>Historique de vos achats</h1>
        <div className="historique-general">
          <Historiques />
        </div>
      </div>
    );
  }
}
