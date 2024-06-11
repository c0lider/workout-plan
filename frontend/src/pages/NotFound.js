import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import NotFoundImage from '../images/404.png';

const NotFound = () => {
    return (
        <Container className="text-info mt-5 pt-5">
            <Row>
                <Col className="text-center" xs={12}>
                    <Image src={NotFoundImage} alt="404 Not Found" fluid />
                    <h1>404 Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
