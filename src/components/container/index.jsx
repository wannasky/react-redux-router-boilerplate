import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Home from 'views/home';
import Gallery from 'views/gallery';
import Test from 'views/test';

export default class Container extends Component {

    render() {

        const routeWrap = Comp => (
            props => (
                <div className='view-wrap'>
                    <div className='container-scroll'>
                         <Comp {...props}/>
                    </div>
                </div>
            )
        )


        const CustomRoute = ({ component: Component, ...options }) => (
            <Route {...options} render={props => (
                <div className='view-wrap'>
                    <div className='container-scroll'>
                        <Component {...props}/>
                    </div>
                </div>
            )}>

            </Route>
        )

        const CustomLink = ({path, name, ...options}) => (
            <Route exact path={path} children={({match}) => (
                <li className={match ? 'link-active' : ''}>
                    <Link to={path} {...options}>
                        {/*<Test match={match} name={name}/>*/}
                    </Link>
                </li>
            )}/>
        )


        return (
            <div className="container">

                <ul>
                    <CustomLink path='/' name='home' />
                    <CustomLink path='/gallery' name='gallery' />
                </ul>


                <Route exact path='/' component={Home}/>
                <CustomRoute path='/gallery' component={Gallery} />
            </div>
        )
    }
}