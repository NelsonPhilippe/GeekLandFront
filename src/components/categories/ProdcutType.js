import * as React from 'react';
import '../../css/components/categories/ProductType.css'

export default class ProductType extends React.Component {
    render() {
        return (
            <div className="product-type-container">
                <div className="product-type">
                    <div className="product-type-bg"></div>
                    <h1>Jeux vidéo</h1>
                </div>

                <div className="product-type">
                    <div className="product-type-bg"></div>
                    <h1>Consoles</h1>
                </div>
                <div className="product-type">
                    <div className="product-type-bg"></div>
                    <h1>Matériel informatique</h1>
                </div>
                <div className="product-type">
                    <div className="product-type-bg"></div>
                    <h1>Figurines</h1>
                </div>
                <div className="product-type">
                    <div className="product-type-bg"></div>
                    <h1>Goodies</h1>
                </div>
            </div>
        );
    }
}