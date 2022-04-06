import * as React from "react";
import SidebarSettings from "../components/settings/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./../css/components/settings/settings.css";
import { Outlet } from "react-router-dom";
import "./../css/App.css";

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
