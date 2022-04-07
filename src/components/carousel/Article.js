import React from "react";

export default class Article extends React.Component {

    constructor(props) {
        super(props)
    }




    render() {
        return (
            <li className="article__item">
                <img src={this.props.url} alt="" />
                <div className="article__item_title">
                    <h5>Nom de l'article</h5>
                </div>
            </li>
        )
    }


}