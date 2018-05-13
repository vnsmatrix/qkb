import React from 'react';
import axios from './axios';

import {Link} from 'react-router-dom';

export default class MixedMedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`/get-mixedmedia`).then(resp => {
            console.log("MixedMedia axios.get resp.data", resp.data);
            this.setState({
                success: resp.data.success,
                artworks: resp.data.artworks
            })
        }).catch(e => {
            console.log("component did not mount", e);
        })
    }

    render() {
        console.log('MixedMedia render this.state', this.state);
        if(!this.state.artworks) {
            return null;
        }
        return (
            <div className="artworks">
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
                            <div className="by">
                                by { }
                                <Link to={`/artist/${artwork.artist}`}>
                                    {artwork.artist}
                                </Link>
                            </div>
                            <div className="dets">
                                {artwork.format} / {artwork.dets} / {artwork.price}€
                            </div>
                            <div className="fav">
                                ♡
                            </div>
                        </div>
                    </div>
                )
            })}

            </div>
        )
    }
}
