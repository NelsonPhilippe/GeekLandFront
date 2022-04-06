import React, {Suspense} from 'react'
import './../../css/components/carousel/CarouselHomeArticle.css'


export default class CarouselPromo extends React.Component {

  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.resizeItems()
    this.resizeContainer()
  }

  resizeContainer(){
    let carousel__container = document.querySelector('.carousel__container')

    let childs =  carousel__container.childNodes;

    let scaleChilds = this.props.display > childs.length ? (100 / this.props.display) : (100 / childs.length);

    let scaleContainer = scaleChilds * childs.length;


    console.log(scaleContainer);



    carousel__container.style.width = scaleContainer + '%';
  }

  resizeItems(){
    let carousel__container = document.querySelector('.carousel__container')
    let childs = carousel__container.childNodes

    let scale = this.props.display > childs.length ? (100 / this.props.display) : (100 / childs.length);

    childs.forEach((item) => {
      item.style.width = scale + '%'
    })
  }


  render(){
    return(
      <div className='carousel'>
        <ul className='carousel__container'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>
    );
  }

}