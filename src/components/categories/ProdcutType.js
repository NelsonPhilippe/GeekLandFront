import * as React from 'react';
import '../../css/components/categories/ProductType.css'
import {Link} from "react-router-dom"

export default class ProductType extends React.Component {
    render() {
        return (
            <div className='categories'>
                <div className="product-type-container">
                    <div className="product-type">
                        <Link to="/" className="product-type-bg">
                            <h1>Jeux vidéo</h1>
                        </Link>
                    </div>

                    <div className="product-type">
                        <Link to="/" className="product-type-bg">
                            <h1>Consoles</h1>

                        </Link>
                    </div>
                    <div className="product-type">
                        <Link to="/" className="product-type-bg">
                            <h1>Matériel informatique</h1>

                        </Link>
                    </div>
                    <div className="product-type">
                        <Link to="/" className="product-type-bg">
                            <h1>Figurines</h1>

                        </Link>
                    </div>
                    <div className="product-type">
                        <Link to="/" className="product-type-bg">
                            <h1>Goodies</h1>

                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}