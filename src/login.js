import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleChange(e) {
        this[e.target.name] = e.target.value;
    }
    submit() {
        console.log("this.email, pass", this.email, this.pass);
        axios
        .post('/login', {
            email: this.email,
            pass: this.pass
        })
        .then (resp => {
            console.log("resp axios post login", resp);
            if(resp.data.success) {
                console.log("login success");
                location.replace('/user');
            } else {
                this.setState({
                    error: resp.data.error
                });
            }
        })
    }
    render() {
        return (
            <div id="login-container">
                <h2>Sign in!</h2>
                <div>Keep track of your fav artworks <i className="fas fa-heart"></i></div>
                {this.state.error && <div className="errmsg">{this.state.error}</div>}
                <input name="email" placeholder="email" onChange={this.handleChange} />
                <input name="pass" type="password" placeholder="password" onChange={this.handleChange} />
                <button className="submitbtn" onClick={this.submit}>Submit</button>
                <div><Link to="/register">Not a member?</Link></div>
            </div>
        );
    }
}
