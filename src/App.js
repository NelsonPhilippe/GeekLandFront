// import logo from './logo.svg';
// import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./views/Search";

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
