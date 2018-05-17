import React from 'react';
import axios from './axios';
import HeartButton from './heartbutton';

import {Link} from 'react-router-dom';

export default class Wishlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.deleteWishlistItem = this.deleteWishlistItem.bind(this)
    }

    componentDidMount() {
        axios.get(`/get-wishlist`).then(resp => {
            console.log("Wishlist axios.get resp.data", resp.data);
            this.setState({
                success: resp.data.success,
                artworks: resp.data.artworks
            })
            if (!resp.data.success) {
                console.log("WISHLIST !resp.data.succes REDIRECTING to /login");
                location.replace('/login')
            }
        }).catch(e => {
            console.log("component did not mount", e);
        })
    }

    deleteWishlistItem(artworkId) {
        console.log("running deleteWishlistItem", artworkId);
        this.setState({
            artworks: this.state.artworks.filter(item => {
                console.log("filtering", item.artwork_id, artworkId);
                return item.artwork_id != artworkId;
            })
        }, function() {
            console.log("new state", this.state.artworks);
        })
    }

    render() {
        console.log('Wishlist render this.state', this.state);
        if(!this.state.artworks) {
            return null;
        }
        if(this.state.artworks.length == 0) {
            return (
                <div className="news-loading">Your wishlist is empty! Click on the hearts to keep track of your favourite artworks. </div>

            )
        }
        return (
            <div className="wishlist">
            {this.state.artworks.map(artwork => {
                return (
                    <div className="prev-container">
                        <div className="prev">
                            <div className="prev-img">
                            <Link to={`/artwork/${artwork.artwork_id}`}
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
                            <HeartButton artworkId={artwork.artwork_id} wishlistItem={true} deleteWishlistItem={this.deleteWishlistItem}/>

                        </div>
                    </div>
                )
            })}

            </div>
        )
    }
}
