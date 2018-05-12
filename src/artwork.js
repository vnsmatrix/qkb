import React from 'react';
import axios from './axios';

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
                artwork: resp.data.artwork,
                name: resp.data.name
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

                            </div>
                            <div className="medium">
                                {this.state.artwork.medium}
                            </div>
                            <div className="name">
                                {this.state.artwork.title}
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
