import * as React from 'react';
import '../../css/components/categories/ProductType.css'
import { Link } from 'react-router-dom';

export default class ProductType extends React.Component {


    render() {
        return (
            <div className="product-type-container"  >
                <Link className="product-type" to="/videogames">
                    <div className="product-type-bg"></div>
                    <h1>Jeux vidéo</h1>
                </Link>

                <Link className="product-type" to="/">
                    <div className="product-type-bg"></div>
                    <h1>Consoles</h1>
                </Link>
                <Link className="product-type" to="/">
                    <div className="product-type-bg"></div>
                    <h1>Matériel informatique</h1>
                </Link>
                <Link className="product-type" to="/">
                    <div className="product-type-bg"></div>
                    <h1>Figurines</h1>
                </Link>
                <Link className="product-type" to="/">
                    <div className="product-type-bg"></div>
                    <h1>Goodies</h1>
                </Link>
            </div>
        );
    }

}
