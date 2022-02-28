// import './css/Search.css'
import * as React from "react";
import Navbar from "../components/Navbar"
import CarouselHome  from "../components/CarouselHome";
import CarouselPromo  from "../components/CarouselPromo"

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <Navbar />
                <CarouselHome />
                <CarouselPromo />
            </div>
        );
    }
}

export default Home;
