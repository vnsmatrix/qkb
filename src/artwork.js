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
                artwork: resp.data.artwork
            })
        }).catch(e => {
            console.log("component did not mount", e);
        })

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
                                {artwork.medium}
                            </div>
                            <div className="name">
                                {artwork.title}
                            </div>
                            <div className="dets">
                                {artwork.format} / {artwork.dets} / {artwork.price}€
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
