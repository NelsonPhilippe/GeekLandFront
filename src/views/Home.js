// import './css/Search.css'
import * as React from "react";
import Navbar from "../components/Navbar"
import Search from "./Search";

function Home(){
    return(
        <div className="Home">
            <Navbar />
            <Search />
        </div>
    );
}

export default Home;
