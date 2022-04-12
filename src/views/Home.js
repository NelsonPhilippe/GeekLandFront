import * as React from "react";
import CarouselHome from "../components/carousel/CarouselHome";
import CarouselPromo from "../components/carousel/CarouselPromo"
import CarouselForYou from "../components/carousel/CarouselForYou"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cgu from './../components/Cgu'


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      carousel_displayed: 10,
      display_cgu: false
    }

    this.updateCarousel = this.updateCarousel.bind(this)
    this.displayCgu = this.displayCgu.bind(this)

  }

  componentDidMount() {
    this.updateCarousel()
    // console.log(this.props.isLogin);

    window.addEventListener('resize', this.updateCarousel)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCarousel)
  }


  updateCarousel() {
    let home = document.querySelector('.Home')

    if (parseInt(getComputedStyle(home).width) <= 1000) {

      return this.setState({
        carousel_displayed: 5
      })
    }

    return this.setState({
      carousel_displayed: 10
    })
  }

  displayCgu() {
    console.log('test');
    this.setState({ display_cgu: !this.state.display_cgu })

  }

  render() {
    return (
      <div className="Home">

        {this.state.display_cgu ? <Cgu displayCgu={this.displayCgu} /> : null}

        <Navbar />

        <CarouselHome />

        <CarouselPromo title="Promotion" display={this.state.carousel_displayed} />


        <CarouselForYou title="Pour vous" display={this.state.carousel_displayed} />
        <Footer displayCgu={this.displayCgu} />

      </div>
    );
  }
}

export default Home;
