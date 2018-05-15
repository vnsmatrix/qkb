import React from 'react';
import axios from './axios';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('/get-news').then(resp => {
            console.log("News axios.get resp.data", resp.data);
            this.setState({
                news: resp.data
            })
            console.log(this.state);
        }).catch(e => {
            console.log("News component did not mount", e);
        })
    }

    render() {
        console.log('News render this.state', this.state);
        if(!this.state.news) {
            console.log("!this.state.news");
            return (
                <div className="news-loading">
                    Getting the freshest LGBTQ+ news from Twitter in English / German / Spanish. Please wait . . .
                </div>
            )
        }
        return (
            <div className="news">
                <h1>News</h1>
                {this.state.news.map(item => {
                    console.log("news map", item);
                    return (
                        <div className="news-container">
                            {item.text && <div>
                                {item.source}: <a href={item.href} target="_blank">{item.text}</a>
                            </div>}
                        </div>
                    )
                })}
            </div>
        )
    }
}
