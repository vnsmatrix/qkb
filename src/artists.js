import React from 'react';
import axios from './axios';

export default class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`/artists`).then(resp => {
            console.log("Artists axios.get resp.data", resp.data);
            this.setState({
                success: resp.data.success,
                artists: resp.data.artists
            })
        }).catch(e => {
            console.log("component did not mount", e);
        })
    }

    render() {
        console.log('Artists render this.state', this.state);
        if(!this.state.artists) {
            return null;
        }
        return (
            <div className="artists">
            {this.state.artists.map(artist => {
                return (
                    <div className="artist-prev-container">
                        <div className="artist-prev">
                            <div className="artist-img">
                                <img src={artist.img} />
                            </div>
                            <div className="artist-medium">
                                {artist.medium}
                            </div>
                            <div className="artist-name">
                                {artist.name}
                            </div>
                            <div className="artist-bio">
                                {artist.bio}
                            </div>
                        </div>
                    </div>
                )
            })}

            </div>
        )
    }
}
