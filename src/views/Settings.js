import * as React from "react";
import SidebarSettings from "../components/settings/Sidebar";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import "../css/Settings.css";
import { Outlet } from "react-router-dom";

export default class Settings extends React.Component {
  render() {
    return (
      <div className="settings">
        <Navbar />
        <SidebarSettings />
        {/* <Footer /> */}

        <div className="outlet">
          <Outlet />
        </div>
      </div>
    );
  }
}
