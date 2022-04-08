import * as React from 'react';
import '../../../css/components/categories/gametype/action.css'
import Article from '../../Article.js';
import { Link } from 'react-router-dom';

export default class Action extends React.Component {

    render() {
        return (
            <div className="action-header">
                <div className="action-header-buttons">
                    <Link id="head1" to="/categories"><h1>Jeux vidéo</h1></Link>
                    <Link id="head2" to="/videogames"><h1>Action</h1></Link>
                    <button id="filter-action">Filtre</button>
                </div>
                <div className="action-container">
                    <div className="action-mini-cont">
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                    </div>

                    <div className="action-mini-cont">
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                    </div>

                    <div className="action-mini-cont">
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                    </div>

                    <div className="action-mini-cont">
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                        <Article name='battlefield' />
                    </div>
                </div>
            </div>
        );
    }
}