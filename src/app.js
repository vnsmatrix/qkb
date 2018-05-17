import React from 'react';
import axios from './axios';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './home';
import About from './about';
import Artworks from './artworks';
import Artists from './artists';
import Artwork from './artwork';
import Artist from './artist';
import Contact from './contact';
import Support from './support';
import News from './news';
import Events from './events';
import Photography from './photography';
import Poetry from './poetry';
import Painting from './painting';
import Illustration from './illustration';
import MixedMedia from './mixedmedia';
import Register from './register';
import Login from './login';
import User from './user';
import Wishlist from './wishlist';


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
                                <Link to="/painting">Painting</Link>
                                <Link to="/illustration">Illustration</Link>
                                <Link to="/mixedmedia">Mixed Media</Link>
                                </div>
                        </div>
                        <Link to="/artists">Artists</Link>

                        <Link to="/news">News</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/support">Support</Link>
                         ⟩
                        <div className="nav-h-r">
                            <Link to="/wishlist"><i class="fas fa-heart"></i></Link>
                            <Link to="/user"><i class="far fa-user"></i></Link>

                            <a href="/logout"><i class="fas fa-sign-out-alt"></i></a>
                        </div>
                    </div>
                    <div className="nav-v">

                        <a href="https://twitter.com/QueerArtBerlin" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>

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
                        <Route path="/contact" component={Contact} />
                        <Route path="/support" component={Support} />
                        <Route path="/news" component={News} />
                        <Route path="/events" component={Events} />
                        <Route path="/photography" component={Photography} />
                        <Route path="/poetry" component={Poetry} />
                        <Route path="/illustration" component={Illustration} />
                        <Route path="/painting" component={Painting} />
                        <Route path="/mixedmedia" component={MixedMedia} />
                        <Route exact path="/artwork/:id" component={Artwork} />
                        <Route exact path="/artist/:artist" component={Artist} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/user" component={User} />
                        <Route path="/wishlist" component={Wishlist} />
                    </div>
                </div>

            </div>
            </BrowserRouter>
        );
    }
}
