// import logo from './logo.svg';
import './css/App.css';
import * as React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Home from './views/Home'

=======
import { Routes, Route, Link } from "react-router-dom";
import Search from "./views/Search";
>>>>>>> b510697e1a0894ba4ed2156da064e89adca269b2

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
