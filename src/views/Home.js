import * as React from "react";
import CarouselHome from "../components/carousel/CarouselHome";
import CarouselPromo from "../components/carousel/CarouselPromo"
import CarouselForYou from "../components/carousel/CarouselForYou"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      carousel_displayed: 10
    }

    this.updateCarousel = this.updateCarousel.bind(this)
  }

  componentDidMount(){
    this.updateCarousel()

    window.addEventListener('resize', this.updateCarousel)
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateCarousel)
  }


  updateCarousel(){
    let home = document.querySelector('.Home')

    console.log('test');

    if(parseInt(getComputedStyle(home).width) <= 1000){

      return this.setState({
        carousel_displayed: 5
      })
    }

    return this.setState({
      carousel_displayed: 10
    })
  }

  render() {
    return (
      <div className="Home">
        <Navbar />
        <CarouselHome />

        <CarouselPromo title="Promotion" display={this.state.carousel_displayed} />


        <CarouselForYou title="Pour vous" display={this.state.carousel_displayed} />
        <Footer />
      </div>
    );
  }
}

export default Home;
