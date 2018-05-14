import React from 'react';
import axios from './axios';

//todo: twApi

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('/get-news').then(resp => {
            console.log("News axios.get resp.data", resp.data);
            this.setState({
                news: resp.data.headlines
            })
        }).catch(e => {
            console.log("News component did not mount", e);
        })
    }

    render() {
        console.log('News render this.state', this.state);
        if(!this.state.news) {
            return null;
        }
        return (
            <div id="news">
                <h1>News</h1>
                <p>
                    UNDER CONSTRUCTION
                </p>

            </div>
        )
    }
}
