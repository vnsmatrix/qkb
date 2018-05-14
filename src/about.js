import React from 'react';
import axios from './axios';
import {Link} from 'react-router-dom'

export default function About (props) {
    console.log("About props", props);
    return (
        <div id="about">
            <h1>About</h1>
            <p>
                QKB (Queer Kunst Berlin) is an online multi-disciplinary art platform promoting emerging and established LGTBQ+ talents. We bring you art made by queers, curated by queers, with a strong emphasis in femme, POC, SW, non-binary & trans-made art. A common place and a caring community where we collaborate, nurture and empower each other.
            </p>
            <h1>Our Mission</h1>
            <p>
                QKB is not an art merchant. We don't sell art and, most importantly, we don't sell artists. Our aim is to connect queer talents directly with potential buyers. We believe society should support artists so they can give away their art. We believe human beings should support human beings. Working ourselves in art and tech, this is our natural contribution to the LGTBQ+ community. We do not make any profit other than the satisfaction of fostering the queer art scene in Berlin and beyond.

            </p>
            <h1>Join Us</h1>
            <p>
                We're here, we're queer! Be fabulous, <a href="mailto:qkb@protonmail.com">send us your art!</a> { }
                Get featured as an <Link to="/artists">artist</Link>, share <Link to="/events">events</Link>, gallery openings, <Link to="/news">news</Link> sources, opportunities or proposals with us. We got each others's backs. Together we are unstoppable!
            </p>
            <div className="about-img-wrapper">
                <div className="about-img">
                    <img src='/kissass.jpg' />
                </div>
                <div className="about-img">
                    <img src='/12_artistquestions.jpg' />
                </div>
            </div>

        </div>
    )
}
