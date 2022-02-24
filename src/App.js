// import logo from './logo.svg';
// import './App.css';
import * as React from "react";
import { Routes, Route,  } from "react-router-dom";
import Fieldlogin from './component/Fieldlogin'


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Fieldlogin />} />
      </Routes>
    </div>
  );
}

export default App;
