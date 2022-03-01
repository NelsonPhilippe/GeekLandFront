
import * as React from "react";
import Navbar from "../components/Navbar"
import CarouselHome  from "../components/CarouselHome";
import CarouselPromo  from "../components/CarouselPromo"
import CarouselForYou from "../components/CarouselForYou"

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <Navbar />
                <CarouselHome />
                <CarouselPromo />
                <CarouselForYou />
            </div>
        );
    }
}

export default Home;
