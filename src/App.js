// import logo from './logo.svg';
// import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home'


function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
