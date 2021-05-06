import React from 'react';

import './Banner.css';

const Banner = ({ setBanner }) => {
    return (
        <article className="banner">
            <button onClick={() => setBanner(false)}>X</button>
            This site is for demonstration purposes only. If you'd like to
            participate in the Virtual Citizenship Day event please visit{' '}
            <a className="banner-link" href="http://ciit.codeforsanjose.org/">
                ciit.codeforsanjose.org
            </a>
            or{' '}
            <a className="banner-link" href="https://e-immigrate.info/">
                e.immigrate.info
            </a>
            for more information.
        </article>
    );
};

export default Banner;
