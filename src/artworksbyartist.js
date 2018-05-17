import React from 'react';
import axios from './axios';
import {Link} from 'react-router-dom';

export default class ArtworksByArtist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        console.log("ArtworksByArtist this.props", this.props);
        axios.get(`/get-artworks-by-artist/${this.props.artist}`).then(resp => {
            console.log("ArtworksByArtist axios.get resp.data", resp.data);
            this.setState({
                artworks: resp.data.artworks
            })
        }).catch(e => {
            console.log("ArtworksByArtist component did not mount", e);
        })
    }

    render() {
        console.log('ArtworksByArtist render this.state', this.state);
        if(!this.state.artworks) {
            return null;
        }
        return (
            <div className="artworks-by-artist">
                {this.state.artworks.length > 0 && <p>Artworks:</p>}
                {this.state.artworks.map(artwork => {
                    return (
                        <div className="prev-container">
                            <div className="prev">
                                <div className="prev-img">
                                    <Link to={`/artwork/${artwork.id}`}
                                        artwork={artwork}>
                                        <img src={artwork.img} />
                                    </Link>

                                </div>
                                <div className="medium">
                                    <Link to={`/${artwork.medium}`}>
                                        {artwork.medium}
                                    </Link>
                                </div>
                                <div className="name">
                                    {artwork.title}
                                </div>
                                <div className="dets">
                                    {artwork.format} / {artwork.dets} / {artwork.price}€
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
