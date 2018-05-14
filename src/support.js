import React from 'react';
import axios from './axios';

export default function Support (props) {
    console.log("Support props", props);
    return (
        <div id="support">
            <h1>Support</h1>
            <p>
                Support the artists: Buy their art!
            </p>
            <p>
                Support QKB: Make a donation :)
            </p>

        </div>
    )
}
