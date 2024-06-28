import React from 'react';
import { Link } from 'react-router-dom';
import FooterListLink from './FooterListLink';

const Footer = () => {
    return (
        <div className="container-fluid">
            <footer className="py-3 my-4 text-info">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 border-info">
                    <FooterListLink link={'#'} text={'Facebook'} />
                    <FooterListLink link={'#'} text={'Github'} />
                    <FooterListLink link={'#'} text={'Instagram'} />
                    <FooterListLink link={'#'} text={'Twitter'} />
                    <FooterListLink link={'#'} text={'Youtube'} />
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
