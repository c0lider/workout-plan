import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Headline = ({ title }) => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 className="text-center text-info fw-bold p-3 bg-secondary border-info border-1 border rounded-1">
                        {title}
                    </h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Headline;
