import React from 'react';
import axios from './axios';

export default class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`/artists/`).then(resp => {
            console.log("resp.data", resp.data);
            this.setState({

            })
        }).catch(e => {
            console.log("component did not mount", e);
        })
    }

    render() {
        return (
            <div className="artists">

            </div>
        )
    }
}
