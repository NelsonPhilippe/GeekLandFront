// import logo from './logo.svg';
import './css/App.css';
import * as React from "react";

import { Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'
// import Search from "./views/Search";

class App extends React.Component {
  render (){
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Login />} />
        </Routes>
      </div>
    )
  }
}

export default App;
