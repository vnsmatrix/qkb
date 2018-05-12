import React from 'react';
import axios from './axios';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './home';
import About from './about';
import Artworks from './artworks';
import Artists from './artists';
import Artwork from './artwork';
import Photography from './photography';
import Poetry from './poetry';
import Illustration from './illustration';
import MixedMedia from './mixedmedia';


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
                        <div className="artworks-menu">
                            <Link to="/artworks">Artworks</Link>
                            <div className="artworks-dropdown">
                                <Link to="/photography">Photography</Link>
                                <Link to="/poetry">Poetry</Link>
                                <Link to="/illustration">Illustration</Link>
                                <Link to="/mixedmedia">Mixed Media</Link>
                                </div>
                        </div>
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

                        <a href="https://twitter.com/QueerKBerlin">Twitter</a>
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
                        <Route exact path="/artworks" component={Artworks} />
                        <Route exact path="/artists" component={Artists} />
                        <Route exact path="/photography" component={Photography} />
                        <Route exact path="/poetry" component={Poetry} />
                        <Route exact path="/illustration" component={Illustration} />
                        <Route exact path="/mixedmedia" component={MixedMedia} />
                        <Route exact path="/artwork/:id" component={Artwork} />

                    </div>
                </div>

            </div>
            </BrowserRouter>
        );
    }
}
