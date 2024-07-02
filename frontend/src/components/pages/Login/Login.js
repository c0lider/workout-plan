// src/components/Login.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../../layout/FormContainer/FormContainer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="landing-page-background pt-3 fs-4">
            <div className="pt-5">
                <FormContainer className="body-color ">
                    <h1 className="mt-3 fw-bold">Sign In</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="formUsername" className="my-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                className="body-color-white text-info"
                                type="text"
                                placeholder="Enter your username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="my-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="text-info"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="mt-2"
                        >
                            Sign In
                        </Button>

                        <Row className="py-3">
                            <Col>
                                New Customer?{' '}
                                <Link to="/register">Register</Link>
                            </Col>
                        </Row>
                    </Form>
                </FormContainer>
            </div>
        </div>
    );
};

export default Login;
