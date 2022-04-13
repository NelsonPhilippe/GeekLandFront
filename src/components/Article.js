import * as React from 'react';

export default class Article extends React.Component {
    render() {
        return (
            <div className="action-game">

                <img src="/img/product/Tanjiro Hinokami.jpg" alt="tanjiro hinokami " className="action-game-img"></img>
                <div className="action-game-name">
                    {this.props.genre_id}
                    {this.props.name}
                    {this.props.description}
                    {this.props.price}
                    {this.props.date}
                    {this.props.stock}
                    {this.props.production}
                    {this.props.brand}
                </div>

            </div>
        );
    }
}