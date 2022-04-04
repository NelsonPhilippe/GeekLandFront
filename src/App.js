// import logo from './logo.svg';
import "./css/App.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Settings from "./views/settings/Settings";
import Contact from "./components/Contact";
import ProfileSetting from "./components/settings/ProfileSetting";
import FAQ from "./components/FAQ";

// import Search from "./views/Search";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="faq" element={<FAQ />}></Route>
            <Route path="profilesetting" element={<ProfileSetting />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
