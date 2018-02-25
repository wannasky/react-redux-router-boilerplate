import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

export default class Test extends Component {

    render() {

        console.log('test:',this.props);

        return (
            <div className="li">
                <p>test</p>
            </div>
        )
    }
}