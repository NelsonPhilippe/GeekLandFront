import * as React from 'react';
import '../../css/components/categories/GameType.css'


export default class GameType extends React.Component {
    render() {
        return (
            <div className="game-type-container">
                <div className="game-type-mini-cont">
                    <div className="game-type">
                        <div className="game-type-bg-1"></div>
                        <h1>Action</h1>
                    </div>

                    <div className="game-type">
                        <div className="game-type-bg-3"></div>
                        <h1>Aventure</h1>
                    </div>
                </div>
                <div className="game-type-mini-cont">
                    <div className="game-type">
                        <div className="game-type-bg-2"></div>
                        <h1>FPS</h1>
                    </div>
                    <div className="game-type">
                        <div className="game-type-bg-1"></div>
                        <h1>F2P</h1>
                    </div>
                </div>
                <div className="game-type-mini-cont">
                    <div className="game-type">
                        <div className="game-type-bg-2"></div>
                        <h1>Arcade</h1>
                    </div>
                    <div className="game-type">
                        <div className="game-type-bg-3"></div>
                        <h1>Hack'n'Slash</h1>
                    </div>
                </div>
                <div className="game-type-mini-cont">
                    <div className="game-type">
                        <div className="game-type-bg-1"></div>
                        <h1>Survie</h1>
                    </div>
                    <div className="game-type">
                        <div className="game-type-bg-2"></div>
                        <h1>Gestion</h1>
                    </div>
                </div>
                <div className="game-type-mini-cont">
                    <div className="game-type">
                        <div className="game-type-bg-2"></div>
                        <h1>Simulation</h1>
                    </div>
                    <div className="game-type">
                        <div className="game-type-bg-3"></div>
                        <h1>Stratégie</h1>
                    </div>
                </div>
            </div>
        );
    }
}