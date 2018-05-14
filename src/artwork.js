import React from 'react';
import axios from './axios';
import {Link} from 'react-router-dom';

export default class Artwork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`/get-artwork/${this.props.match.params.id}`).then(resp => {
            console.log("Artwork axios.get resp.data", resp.data);
            this.setState({
                artwork: resp.data.artwork
            })
        }).catch(e => {
            console.log("Artwork component did not mount", e);
        })
    }

    render() {
        console.log('Artwork render this.state', this.state);
        if(!this.state.artwork) {
            return null;
        }
        return (
            <div className="artwork">

                    <div className="modal-container">
                        <div className="modal">
                            <div className="modal-img">
                                <img src={this.state.artwork.img} />
                            </div>
                            <div className="medium">
                                <Link to={`/${this.state.artwork.medium}`}>
                                    {this.state.artwork.medium}
                                </Link>
                            </div>
                            <div className="name">
                                {this.state.artwork.title}
                            </div>
                            <div className="by">
                                by { }
                                <Link to={`/artist/${this.state.artwork.artist}`}>
                                    {this.state.artwork.artist}
                                </Link>
                            </div>
                            <div className="year">
                                {this.state.artwork.year}
                            </div>
                            <div className="dets">
                                {this.state.artwork.format} / {this.state.artwork.dets} / {this.state.artwork.price}€
                            </div>
                            <div className="fav">
                                ♡
                            </div>
                        </div>
                    </div>


            </div>
        )
    }
}
