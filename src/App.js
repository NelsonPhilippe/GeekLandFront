// import logo from './logo.svg';
import './css/App.css';
import * as React from "react";

import { Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register';
import ForgottenPassword from './views/ForgottenPassword';
import BackUpCode from './views/BackUpCode';
import ResetPassword from './views/ResetPassword';
// import Search from "./views/Search";

class App extends React.Component {
  render (){
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
          <Route path="/BackUpCode" element={<BackUpCode />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </div>
    )
  }
}

export default App;
