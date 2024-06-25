import React from 'react';

const FooterListLink = ({ link, text }) => {
    return (
        <li className="nav-item">
            <a href={link} className="footer-link">
                <i className={`fab fa-${text.toLowerCase()}`}> {text}</i>
            </a>
        </li>
    );
};

export default FooterListLink;
