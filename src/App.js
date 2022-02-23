// import logo from './logo.svg';
import './css/App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './views/Home'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
