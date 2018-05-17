import React from 'react';
import axios from './axios';

export default class HeartButton extends React.Component {
    constructor(props) {
        super(props);
        console.log("this.props", this.props);
        this.state = {
            fav: this.props.fav
        };
        this.toggleFav = this.toggleFav.bind(this);
    }

    componentDidMount() {
        if (this.props.wishlistItem) {
            this.setState ({
                fav: true
            })
        }
    }

    toggleFav() {
        console.log("running toggleFav");
        if(!this.state.fav) {
            console.log("!this.state.fav, addFav...");
            axios.post('/addFav/'+ this.props.artworkId).then(resp => {
                console.log("HeartButton axios.post addFav resp.data", resp.data);
                this.setState({
                    fav: !this.state.fav
                })
            }).catch(e => {
                console.log("ERROR toggleFav", e);
            })
        } else {
            console.log("this.state.fav, deleteFav...", this.props.artworkId);
            axios.post('/deleteFav/'+ this.props.artworkId).then(resp => {
                console.log("HeartButton axios.post deleteFav resp.data", resp.data);

                if(this.props.wishlistItem) {
                    console.log("deleteWishlistItem", this.props.artworkId);
                    this.props.deleteWishlistItem(this.props.artworkId);
                } else {
                    this.setState({
                        fav: !this.state.fav
                    })
                }
            }).catch(e => {
                console.log("ERROR toggleFav", e);
            })
        }
    }

    render () {
        console.log("this.state", this.state)
        return (
            <div>
                {!this.state.fav && <i className="far fa-heart" onClick={this.toggleFav}></i>
                    || this.state.fav && <i className="fas fa-heart" onClick={this.toggleFav}></i>
                }
            </div>
        );
    }
}
