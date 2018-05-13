import React from 'react';
import axios from './axios';
import {Link} from 'react-router-dom';

export default class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`/get-artists`).then(resp => {
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
                    <div className="prev-container">
                        <div className="prev">
                            <div className="prev-img">
                                <Link to={`/artist/${artist.name}`}>
                                    <img src={artist.img} />
                                </Link>
                            </div>
                            <div className="medium">
                                <Link to={`/${artist.medium}`}>
                                    {artist.medium}
                                </Link>
                            </div>
                            <div className="name">
                                {artist.name}
                            </div>
                            <div className="bio">
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
