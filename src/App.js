// import logo from './logo.svg';
// import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CGU from './component/Cgu'


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<CGU />} />
      </Routes>
    </div>
  );
}

export default App;
