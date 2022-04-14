import axios from "axios";
import { ref } from "firebase/storage";
import React from "react";
import { storage, getDownloadURL, getBlob } from "../Firebase";

export default class ProdcutSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: ''
        }
    }

    componentDidMount() {
        this.getImage()
    }

    getImage() {
        getDownloadURL(ref(storage, 'default.png')).then((url) => {
            this.setState({
                image: url
            })         

        })
    }

    render() {
        return (
            <div className="result">
                <img
                    src={this.state.image}
                    alt="Tanjiro Hinokami"
                    title="Tanjiro Hinokami"
                />
                <div className="text-search">
                    <h1>{this.props.title}</h1>
                    <p>
                        {this.props.description}
                    </p>
                </div>
                <div className="price">
                    <h1>{this.props.price} €</h1>
                </div>
            </div>

        )
    }

}