import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Container fluid className="my-2">
            <Row>
                <div className="col-12">
                    <Button onClick={handleGoBack} variant="info">
                        <i className="fa-solid fa-less-than me-2 fs-3"></i>
                        <i className="fa-solid fa-less-than me-2 fs-3"></i>
                    </Button>
                </div>
            </Row>
        </Container>
    );
}

export default BackButton;
