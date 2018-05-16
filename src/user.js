import React from 'react';
import axios from './axios';
import EditName from './editname';
import EditEmail from './editemail';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    componentDidMount() {
        axios.get('/get-user').then( resp => {
            console.log("User componentDidMount response", resp);
            this.setState({
                success: resp.data.success,
                user: resp.data.user
            })
            if (!resp.data.success) {
                console.log("USER !resp.data.succes REDIRECTING to /login");
                location.replace('/login')
            }

        }).catch(e => {
            console.log("User component did NOT mount!", e);
        })
    }

    render() {
        if (!this.state.user) {
            console.log("rendering User !this.state.user");
            return null;
        }
        return (
            <div id="user">
                <h1>My Settings</h1>
                <div>
                    Email:
                    <EditEmail
                        email={this.state.user.email}
                        />
                </div>
                <div>
                    Name:
                    <EditName
                        first={this.state.user.first}
                        last={this.state.user.last}
                        />
                </div>


                <div id="logout">
                    <a href="/logout">Sign out?</a>
                </div>
            </div>
        )
    }
}
