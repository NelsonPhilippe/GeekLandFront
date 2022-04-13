import "./css/App.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Settings from "./views/Settings";
import Contact from "./components/settings/Contact";
import ProfileSetting from "./components/settings/ProfileSetting";
import FAQ from "./components/settings/FAQ";


import Register from './views/Register';
import ForgottenPassword from './views/ForgottenPassword';
import BackUpCode from './views/BackUpCode';
import ResetPassword from './views/ResetPassword';
import Categories from './views/Categories';
import Historique from "./components/settings/Historique";
import Paiement from './components/settings/Paiement'
import Securite from './components/settings/Securite'

import Search from './views/Search'

import Action from './components/categories/GameType/Action'
import VideoGames from './components/categories/ProductType/VideoGames'

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* <Route path="/settings" element={<Settings />} /> */}

          <Route path="/register" element={<Register />} />
          <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
          <Route path="BackUpCode" element={<BackUpCode />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="categories" element={<Categories />} />

          <Route path="/settings" element={<Settings />}>
            <Route path="profilesetting" element={<ProfileSetting />}></Route>
            <Route path="paiement" element={<Paiement />}></Route>
            <Route path="securite" element={<Securite />}></Route>
            <Route path="historique" element={<Historique />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="faq" element={<FAQ />}></Route>
          </Route>
          <Route path="/categories" element={<Categories />} />
          <Route path="/videogames" element={<VideoGames />} />
          <Route path="/action" element={<Action />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />

          <Route path='/search/:value' element={<Search />} />


        </Routes>

      </div>
    );
  }
}

export default App;
