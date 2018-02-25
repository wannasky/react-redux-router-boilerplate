import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import 'views/gallery/index.scss';

export default class Gallery extends Component {

    render() {

        console.log('gallery',this)

        let match = this.props.match;

        const CustomComp = ({match}) => (
            <div>
                <p>{match.params.link}</p>
            </div>
        )

        const ChildLink = ({match}) => (
            <div>
                <ul>
                    <li><Link to={`${match.url}/linkOne`}>linkOne</Link></li>
                    <li><Link to={`${match.url}/linkTwo`}>linkTwo</Link></li>
                </ul>
                <Route path={`${match.url}/:link`} component={CustomComp}/>
            </div>
        )

        return (
            <div className="view-gallery">
                <p>view-gallery</p>
                <ChildLink match={match}/>
            </div>
        )
    }
}