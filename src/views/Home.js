import * as React from "react";
import CarouselHome from "../components/carousel/CarouselHome";
import CarouselPromo from "../components/carousel/CarouselPromo"
import CarouselForYou from "../components/carousel/CarouselForYou"

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <CarouselHome />

        <div>
          <CarouselPromo display={5} />
        </div>

        <CarouselForYou />
        <Footer />
      </div>
    );
  }
}

export default Home;
