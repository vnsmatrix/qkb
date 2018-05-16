import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
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
        console.log("Register this.props", this.first, this.last, this.email, this.pass);
        axios
        .post('/register', {
            first: this.first,
            last: this.last,
            email: this.email,
            pass: this.pass
        })
        .then (resp => {
            console.log("resp axios post register", resp);
            if(resp.data.success) {
                console.log("success!");
                location.replace('/user')
            } else {
                this.setState({
                    error: resp.data.error
                });
            }
        }).catch(e => {
            console.log(e);
        })
    }

    render() {
        return (
            <div id="register-container">
                <h2>Sign up!</h2>
                <div>
                    Looks like the beginning of a beautiful friendship <i className="fas fa-heart"></i>
                </div>
                {this.state.error && <div className="errmsg">{this.state.error}</div>}
                <input name="first" placeholder="first name" onChange={this.handleChange} />
                <input name="last" placeholder="last name" onChange={this.handleChange} />
                <input name="email" placeholder="email" onChange={this.handleChange} />
                <input name="pass" placeholder="pass" onChange={this.handleChange} />
                <button className="submitbtn" onClick={this.submit}>Submit</button>
                <div>
                    <Link to="/login">
                        Already a member?
                        </Link>
                </div>
            </div>
        );
    }
}
