import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const SaveButton = ({ onClick }) => {
    return (
        <Container>
            <Row className="d-flex align-items-end">
                <Col xs={12} className="d-flex justify-content-end">
                    <Button onClick={onClick} variant="info">
                        <i className="fa-regular fa-2x fa-floppy-disk"></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SaveButton;
