import * as React from "react";
import * as ReactDOM from 'react-dom';

import './../css/components/CarouselHome.css'

class CarouselHome extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }

        this.left = this.left.bind(this);
    }

        
    left(){
        let block = document.getElementById('block-0')
        let block_2 = document.getElementById('block-1')
        let block_state = block.style.visibility;

        console.log(block);

        if(block_state === "visible"){
            block.style.visibility = "hidden"
            block.style.left = "-100%";
            block_2.style.right = "0";
            block_2.style.visibility = "visible"
        }

    }

    right() {
    
    }

    render(){
        
        return (
            <div className="carousel-home">
                <button id="right" onClick={this.left}></button>
                <button id="left" onClick={this.right}></button>
                <div className="block-0" id="block">
                    <img src="/img/carousel-home/ban-0.png" alt="ban-0"/>
                </div>
                <div className="block-1" id="block-1">
                    <img src="/img/carousel-home/ban-1.jpg" alt="ban-1"/>
                </div>
                <button id="dot-0"></button>
                <button id="dot-1"></button>
            </div>
            
        );
    }
}

export default CarouselHome;