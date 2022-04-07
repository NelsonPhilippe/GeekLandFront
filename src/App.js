// import logo from './logo.svg';
import "./css/App.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import ProfileSetting from "./components/settings/ProfileSetting";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Settings from "./views/settings/Settings";
// import Search from "./views/Search";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
