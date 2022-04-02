import React from "react";
import "./../../css/components/settings/Sidebar.css";
import { Link, Outlet } from "react-router-dom";

export default class SidebarSettings extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       informations: "/profileSetting",
  //       paiement: "/paiement",
  //     };
  //   }

  //   getPage(link) {
  //     switch (link) {
  //       default:
  //         window.location.href = "/";
  //         break;
  //       case "info":
  //         window.location.href = this.state.informations;
  //         break;
  //       case "paiement":
  //         window.location.href = this.state.paiement;
  //         break;
  //     }
  //   }
  //   info() {
  //     <Link to="/ProfileSeting"></Link>;
  //   }
  render() {
    return (
      <div>
        <div className="sidebar">
          <Link to="/profilesetting">Informations</Link>
          <Link to="/profilesetting">Paiement</Link>
          <Link to="/profilesetting">Sécurité</Link>
          <Link to="/profilesetting">Historique</Link>
          <Link to="/Contact">Contactez-nous</Link>
          <Link to="/FAQ">F.A.Q</Link>
        </div>
        <Outlet />
      </div>
    );
  }
}
