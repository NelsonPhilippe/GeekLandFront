import * as React from "react";
import SidebarSettings from "../../components/settings/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/components/settings/settings.css";
// import { Link, Outlet } from "react-router-dom";

export default class Settings extends React.Component {
  render() {
    return (
      <div className="settings">
        <Navbar />
        <SidebarSettings />
        <div className="ba"></div>
        <Footer />
      </div>
    );
  }
}
