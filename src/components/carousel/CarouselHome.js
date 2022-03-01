import React from "react";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import './../../css/components/carousel/CarouselHome.css'


export default class Carousel extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            position: 0
        }
        console.log('loading... ' + this.state.position);
    }




    render() {


        return (
           <AwesomeSlider>
               <div data-src="/img/carousel-home/ban-0.png"></div>
               <div data-src="/img/carousel-home/ban-1.jpg"></div>

           </AwesomeSlider>

        )
    }
}