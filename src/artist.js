import React from 'react';
import axios from './axios';
import {Link} from 'react-router-dom';
import ArtworksByArtist from './artworksbyartist'

export default class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`/get-artist/${this.props.match.params.artist}`).then(resp => {
            console.log("Artist axios.get resp.data", resp.data);
            this.setState({
                artist: resp.data.artist
            })
        }).catch(e => {
            console.log("Artist component did not mount", e);
        })
    }

    render() {
        console.log('Artist render this.state', this.state);
        if(!this.state.artist) {
            return null;
        }
        return (
            <div className="artist">
                <div className="artist-container">
                    <div className="artist-modal">

                        <div className="modal-img">
                            <img src={this.state.artist.img} />
                            </div>
                        <div className="artist-info">

                            <div className="medium">
                                <Link to={`/${this.state.artist.medium}`}>
                                    {this.state.artist.medium}
                                </Link>
                            </div>
                            <div className="name">
                                {this.state.artist.name}
                            </div>
                            <div className="bio">
                                {this.state.artist.bio}
                            </div>
                            <div className="contact-artist">
                                <i class="far fa-envelope"></i> {  }
                                <a href="mailto:{this.state.artist.email}">Contact Artist</a>
                            </div>
                            <div className="share-profile">
                                <p>SHARE THIS PROFILE:</p>
                                <a href="#"><i class="fab fa-twitter-square"></i></a>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-google-plus-square"></i></a>
                                <a href="#"><i class="fas fa-envelope-square"></i></a>

                            </div>
                        </div>

                    </div>
                    <div className="artist-artworks">
                        <ArtworksByArtist artist={this.state.artist.name}/>
                    </div>

                </div>
            </div>
        )
    }
}
