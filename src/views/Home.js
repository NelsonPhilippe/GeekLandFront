// import './css/Search.css'
import * as React from "react";
import Navbar from "../components/Navbar"
import CarouselHome  from "../components/CarouselHome";

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <Navbar />
                <CarouselHome />
                {/* <Search /> */}
            </div>
        );
    }
}

export default Home;
