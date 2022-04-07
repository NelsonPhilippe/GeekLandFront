import React from "react";
import "./../../css/components/settings/Sidebar.css";
import { Link } from "react-router-dom";

export default class SidebarSettings extends React.Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="sidebar-link">
            <Link to="/settings">Informations</Link>
            <Link to="paiement">Paiement</Link>
            <Link to="securite">Sécurité</Link>
            <Link to="historique">Historique</Link>
            <Link to="contact">Contactez-nous</Link>
            <Link to="faq">F.A.Q</Link>
          </div>
        </div>
      </div>
    );
  }
}
