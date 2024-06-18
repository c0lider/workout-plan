import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid">
            <footer className="py-3 my-4 text-info">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 border-info">
                    <li className="nav-item">
                        <a href="#" className="footer-link">
                            <i className="fab fa-facebook"> Facebook</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="footer-link">
                            <i className="fab fa-github"> Github</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="footer-link">
                            <i className="fab fa-instagram"> Instagram</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="footer-link">
                            <i className="fab fa-twitter"> X</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="footer-link">
                            <i className="fab fa-youtube"> Youtube</i>
                        </a>
                    </li>
                </ul>
                <p className="text-center">
                    <Link href="/about" className="text-info">
                        &copy; 2024 Fra Uas - Prog Ex
                    </Link>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
