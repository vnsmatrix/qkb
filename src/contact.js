import React from 'react';
import axios from './axios';

export default function Contact (props) {
    console.log("Contact props", props);
    return (
        <div id="contact">
            <h1>Contact</h1>
            <p>
                For any kind of inquiries, proposals, suggestions, please email:
            </p>
            <p>
            <i class="far fa-envelope"></i> {  }
            <a href="mailto:qkb@protonmail.com">qkb@protonmail.com</a>

            </p>

        </div>
    )
}
