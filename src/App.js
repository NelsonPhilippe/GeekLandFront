import "./css/App.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";
<<<<<<< refs/remotes/origin/profile-info
import Home from "./views/Home";
import Login from "./views/Login";
import Settings from "./views/Settings";
import Contact from "./components/settings/Contact";
import ProfileSetting from "./components/settings/ProfileSetting";
import FAQ from "./components/settings/FAQ";
import Securite from "./components/settings/Securite";
import Paiement from "./components/settings/Paiement";
import Historique from "./components/settings/Historique";
=======
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register';
import ForgottenPassword from './views/ForgottenPassword';
import BackUpCode from './views/BackUpCode';
import ResetPassword from './views/ResetPassword';
import Categories from './views/Categories';
// import Search from "./views/Search";

>>>>>>> add register + del component fieldlogin + navbar
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
<<<<<<< refs/remotes/origin/profile-info
          <Route path="/settings" element={<Settings />}>
            <Route index element={<ProfileSetting />}></Route>
            <Route path="paiement" element={<Paiement />}></Route>
            <Route path="securite" element={<Securite />}></Route>
            <Route path="historique" element={<Historique />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="faq" element={<FAQ />}></Route>
          </Route>
=======
          <Route path="/register" element={<Register />} />
>>>>>>> add register + del component fieldlogin + navbar
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
