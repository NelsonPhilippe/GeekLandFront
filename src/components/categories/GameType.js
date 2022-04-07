import * as React from 'react';
import '../../css/components/categories/GameType.css'
import { Link } from 'react-router-dom';

export default class GameType extends React.Component {
    render() {
        return (
            <div className="game-type-container">
                <div className="game-type-mini-cont">
                    <Link className="game-type" to="/action">
                        <div className="game-type-bg-1"></div>
                        <h1>Action</h1>
                    </Link>

                       <Link className="game-type" to="/">
                        <div className="game-type-bg-3"></div>
                        <h1>Aventure</h1>
                        </Link>
                </div>
                <div className="game-type-mini-cont">
                       <Link className="game-type" to="/">
                        <div className="game-type-bg-2"></div>
                        <h1>FPS</h1>
                        </Link>
                       <Link className="game-type" to="/">
                        <div className="game-type-bg-1"></div>
                        <h1>F2P</h1>
                        </Link>
                </div>
                <div className="game-type-mini-cont">
                       <Link className="game-type" to="/">
                        <div className="game-type-bg-2"></div>
                        <h1>Arcade</h1>
                        </Link>
                       <Link className="game-type" to="/">
                        <div className="game-type-bg-3"></div>
                        <h1>Hack'n'Slash</h1>
                        </Link>
                </div>
                <div className="game-type-mini-cont">
                       <Link className="game-type" to="/">
                        <div className="game-type-bg-1"></div>
                        <h1>Survie</h1>
                        </Link>
                       <Link className="game-type" to="/">
                        <div className="game-type-bg-2"></div>
                        <h1>Gestion</h1>
                        </Link>
                </div>
                <div className="game-type-mini-cont">
                       <Link className="game-type" to="/">
                        <div className="game-type-bg-2"></div>
                        <h1>Simulation</h1>
                        </Link>
                       <Link className="game-type" to="/">
                        <div className="game-type-bg-3"></div>
                        <h1>Stratégie</h1>
                        </Link>
                </div>
            </div>
        );
    }
}