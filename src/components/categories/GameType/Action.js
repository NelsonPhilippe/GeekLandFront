import * as React from 'react';
import '../../../css/components/categories/gametype/action.css'
import Article from '../../Article.js';
// import { Link } from 'react-router-dom';

export default class Action extends React.Component {

    render() {
        return (
            <div className="action-header">
                <div className="action-header-buttons">
                    <button id="head1">Jeux vidéo</button>
                    <button id="head2">Action</button>
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