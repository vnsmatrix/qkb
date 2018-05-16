import React from 'react';
import axios from './axios';

export default class EditEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorVisible: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleChange(e) {
        this[e.target.name] = e.target.value;
    }
    submit() {
        axios
        .post('/editemail', {
            email: this.email
        })
        .then (resp => {
            console.log("///EDITEMAIL resp axios post", resp);
            if(resp.data.success) {
                console.log("success");
                console.log("resp.data", resp.data.first, resp.data.last);
                location.replace('/user')
            } else {
                this.setState({
                    error: resp.data.error
                });
            }
        })
    }
    render () {
        const editor= (
            <div id="editor">
                {this.state.error && <div className="errmsg">{this.state.error}</div>}
                <input name="email" placeholder={this.props.email} onChange={this.handleChange} />
                <button className="submitbtn" onClick={this.submit}>Edit</button>
            </div>
        )
        console.log("this.props.first", this.props.first);
        return (
            <div>
                <div id="editemail">
                    {editor}
                </div>
            </div>
        );
    }
}
