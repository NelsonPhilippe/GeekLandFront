
import * as React from "react";
import Navbar from "../components/Navbar"
import CarouselHome  from "../components/carousel/CarouselHome";
import CarouselPromo  from "../components/carousel/CarouselPromo"
import CarouselForYou from "../components/carousel/CarouselForYou"
import Footer from "../components/Footer"

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <Navbar />
                <CarouselHome />
                <CarouselPromo />
                <CarouselForYou />
                <Footer />
            </div>
        );
    }
}

export default Home;
