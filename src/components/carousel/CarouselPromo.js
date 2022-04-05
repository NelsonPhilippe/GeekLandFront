import React, {Suspense} from 'react'
import './../../css/components/carousel/CarouselHomeArticle.css'


export default class CarouselPromo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      state: 0,
      images: [],
      ca_1: [],
      ca_3: []
    }

    this.left = this.left.bind(this)
    this.right = this.right.bind(this)

  }

  componentDidMount() {
    this.getImages(15, false);

  }


  getImages(display, substract) {

    let id = this.state.state;
    let display_ca1 = display * 3


    let images = []
    let ca1 = []
    let ca3 = []

    if (substract) {
      // if (id != 0) {
      //   for (let i = display; images.length < display; i--) {
      //     id--;
      //     images.push(<div key={id} className='item-carousel'> <img src={`https://picsum.photos/${id}`} alt='' /></div>)
      //   }

      //   this.setState({
      //     state: id,
      //     images: images
      //   })
      // }

    } else {


      for (let i = 0; i < display_ca1; i++) {
        id++;
        if (i < display) {
          images.push(<div key={id} className='item-carousel'> <img src={`https://picsum.photos/${id}`} alt='' /></div>)
        }


        if (i < (display * 2) && i >= display) {
          ca1.push(<div key={id} className='item-carousel'> <Suspense> <img loading='eager' src={`https://picsum.photos/${id}`} alt='' /></Suspense></div>);

        }

        if (i < (display * 3) && i >= (display * 2)) {
          ca3.push(<div key={id} className='item-carousel'> <Suspense> <img loading='eager' src={`https://picsum.photos/${id}`} alt='' /></Suspense></div>);
        }


      }

      this.setState({
        state: id,
        images: images,
        ca_1: ca1,
        ca_3: ca3
      })


    }


  }

  left(e) {
    e.preventDefault();


    // let ca_1 = document.getElementById('ca')
    let ca_2 = document.getElementById('ca_1')
    let ca_3 = document.getElementById('ca_2')


    ca_2.style.right = '200%';
    ca_3.style.left = '200%';

    this.getImages(15, true)


  }

  right(e) {
    e.preventDefault();

    let ca_1 = document.getElementById('ca_1')
    let ca_2 = document.getElementById('ca_2')
    let ca_3 = document.getElementById('ca_3')

    // console.log(getComputedStyle(ca_2).right);

    if (getComputedStyle(ca_2).right == '0px') {
      console.log('ca2');
      ca_1.style.right = '0';
      ca_2.style.right = '-200%'
      ca_3.style.right = '200%'
    }

    if(getComputedStyle(ca_1) == '0px'){
      console.log('ca1');
      ca_3.style.right = '0'
      ca_1.style.right = '-200%';
      ca_2.style.right = '200%'
    }

    if(getComputedStyle(ca_3) == '0px'){
      console.log('ca3');
      ca_3.style.right = '-200%'
      ca_1.style.right = '200%';
      ca_2.style.right = '0'
    }



    this.getImages(15, false)

  }

  render() {


    return (
      <div className="promo">
        <div className="promo-cat">
          <h1>Promo</h1>
        </div>
        <div className='carousel'>
          <div className='btn'>
            <div className='btn-left' onClick={this.left}></div>
            <div className='btn-right' onClick={this.right}></div>
          </div>

          <div className='containter-carousel' id='ca_1'>
            {this.state.ca_1}
          </div>
          <div className='containter-carousel' id='ca_2'>
            {this.state.images}
          </div>
          <div className='containter-carousel' id='ca_3'>
            {this.state.ca_3}
          </div>
        </div>
      </div>
    );
  }
}