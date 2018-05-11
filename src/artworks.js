import React from 'react';
import axios from './axios';

export default class Artworks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`/artworks/`).then(resp => {
            console.log("resp.data", resp.data);
            this.setState({

            })
        }).catch(e => {
            console.log("component did not mount", e);
        })
    }

    render() {
        return (
            <div className="artworks">

            </div>
        )
    }
}
