import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const InfoContainer = ({ title, text, children }) => {
    return (
        <Container className="hero-div bg-transparent-info rounded-4 p-4">
            <Row>
                <Col xs={12}>
                    <h1>{title}</h1>
                    <p className="fs-4">{text}</p>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default InfoContainer;
