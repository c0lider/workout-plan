import React from 'react';
import { Row } from 'react-bootstrap';

const EmptyTeaser = ({ children }) => {
    return (
        <Row className="workout-teaser animate-new" key={0}>
            {children}
        </Row>
    );
};

export default EmptyTeaser;
