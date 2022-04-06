import * as React from 'react';
import GameType from '../GameType';

export default class VideoGames extends React.Component {
    render() {
        return(
            <div className="videogames-container">
                <div className="title"><h1>Figurines</h1></div>
                <GameType/>
            </div>
        );
    }
}