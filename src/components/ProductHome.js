import * as React from 'react'

export default class ProductHome extends React.Component {


    render(){
        return(
            <div className="product-home">
                <img src={'/img/product/' + this.props.img} alt="" />
                <div className="product-title">
                    <p>{this.props.title}</p>
                </div>
            </div>
        );
    }

}

// Lorem ipsum dolor sit amet