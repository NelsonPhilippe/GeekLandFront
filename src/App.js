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


import Register from './views/Register';
import ForgottenPassword from './views/ForgottenPassword';
import BackUpCode from './views/BackUpCode';
import ResetPassword from './views/ResetPassword';
import Categories from './views/Categories';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/register" element={<Register />} />
          <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
          <Route path="BackUpCode" element={<BackUpCode />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="categories" element={<Categories />} />

        </Routes>

      </div>
    );
  }
}

export default App;
