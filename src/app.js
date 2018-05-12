import React from 'react';
import axios from './axios';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './home';
import About from './about';
import Artworks from './artworks';
import Artists from './artists';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <BrowserRouter>
            <div id="app-container">
                <nav>
                    <Link className="home-logo" to="/">QKB</Link>
                    <div className="nav-h">
                        ⟨
                        <Link to="/about">About</Link>
                        <Link to="/artworks">Artworks</Link>
                        <Link to="/artists">Artists</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/news">News</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/support">Support</Link>
                         ⟩
                        <div className="nav-h-r">
                            <Link to="/wishlist">♡</Link>
                        </div>
                    </div>
                    <div className="nav-v">

                        <a href="https://twitter.com/">Twitter</a>
                        <a href="https://instagram.com/">IG</a>
                        <a href="https://facebook.com/">FB</a>

                    </div>
                </nav>

                <div className="content">
                    <div id="routes">
                        <Route exact
                            path="/"
                            render={() => (
                                <Home/>
                            )}
                        />
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/artworks" component={Artworks} />
                        <Route path="/artists" component={Artists} />

                    </div>
                </div>

            </div>
            </BrowserRouter>
        );
    }
}
