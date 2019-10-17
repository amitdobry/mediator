import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyComponentSession from './MyComponentSession';
import MyComponentWelcome from './MyComponentWelcome';
import './myIntroStyle.css'
// import About from './components/About';
// import Contact from './components/Contact';


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav className="navtital purp-text navbar navbar-expand-lg navbar-light bg-light">
                            <ul className="navbar-nav mr-auto">
                                <li><Link to={'/MyComponentWelcome'} className="nav-link">About Mediator Papu</Link></li>
                                <li><Link to={'/MyComponentSession'} className="nav-link"> Session part II Demo </Link></li>
                                
            {/* <li><Link to={'/about'} className="nav-link">About</Link></li> */}
                            </ul>
                        </nav>
                        <hr />
                        <Switch>
                            <Route path='/MyComponentWelcome' component={MyComponentWelcome} />
                            <Route exact path='/MyComponentSession' component={MyComponentSession} />
                            
              {/* <Route path='/about' component={About} /> */}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}



export const Container = styled.button`
    width: 100%;
    height: 40px;
    background-color: green;
    font-family: black;
    `
