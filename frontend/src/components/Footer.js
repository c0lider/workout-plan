import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid">
            <footer className="py-3 my-4 text-secondary">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 border-secondary">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-secondary">
                            <i className="fab fa-facebook"> Facebook</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-secondary">
                            <i className="fab fa-github"> Github</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-secondary">
                            <i className="fab fa-instagram"> Instagram</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-secondary">
                            <i className="fab fa-twitter"> X</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-secondary">
                            <i className="fab fa-youtube"> Youtube</i>
                        </a>
                    </li>
                </ul>
                <p className="text-center">&copy; 2024 Fra Uas - Prog Ex</p>
            </footer>
        </div>
    );
};

export default Footer;
