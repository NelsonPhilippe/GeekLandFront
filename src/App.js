// import logo from './logo.svg';
import "./css/App.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import ProfileSetting from "./components/settings/ProfileSetting";
// import Search from "./views/Search";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
        </Routes>
      </div>
    );
  }
}

export default App;
