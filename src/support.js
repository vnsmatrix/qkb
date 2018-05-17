import React from 'react';
import axios from './axios';
import {Link} from 'react-router-dom'

//todo: link to patreon

export default function Support (props) {
    console.log("Support props", props);
    return (
        <div id="support">
            <h1>Support</h1>
            <p>
                Support the artists: <Link to="/artworks">Buy their art!</Link>
            </p>
            <p>
                Support the platform: <a href="https://www.gofundme.com/support-qkb" target="_blank">Make a donation! </a>
            </p>

        </div>
    )
}
