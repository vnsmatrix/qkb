import React from 'react';
import axios from './axios';

//todo

export default class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('/get-events').then(resp => {
            console.log("Events axios.get resp.data", resp.data);
            this.setState({
                events: resp.data
            })
            console.log(this.state);
        }).catch(e => {
            console.log("Events component did not mount", e);
        })
    }

    render() {
        console.log('Events render this.state', this.state);
        if(!this.state.events) {
            console.log("!this.state.events");
            return (
                <div className="events-loading">
                    Please wait . . .
                </div>
            )
        }
        return (
            <div className="events">
                <h1>Events</h1>
                {this.state.events.map(item => {
                    console.log("events map", item);
                    return (
                        <div className="events-container">
                            {item.source}: <a href={item.href} target="_blank">{item.text}</a>
                        </div>
                    )
                })}
            </div>
        )
    }
}
