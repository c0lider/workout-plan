import React from 'react';
import { Col } from 'react-bootstrap';
import EmptyTeaser from './EmptyTeaser';

const TextTeaser = ({ children }) => {
    return (
        // TODO key
        <EmptyTeaser>
            <Col xs={12} className="d-flex justify-content-center">
                {children}
            </Col>
        </EmptyTeaser>
    );
};

export default TextTeaser;
