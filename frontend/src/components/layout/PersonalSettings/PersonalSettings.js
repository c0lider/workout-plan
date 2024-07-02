import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import FormContainer from '../FormContainer/FormContainer';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const PersonalSetting = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [changePassword, setChangePassword] = useState('false');
    const [darkmode, setDarkmode] = useState('false');
    const [authState, setAuthstate] = useState('true');

    useEffect(() => {
        // Demo data
        setUsername('Ali Kosari');
        setEmail('alikowsari00@gmail.com');
        setPassword('123456');
    }, []);

    const handleBack = () => {
        navigate('/workouts');
    };

    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange = () => {
        setShowPasswordForm(true);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Implement the password update logic here
        console.log('New Password:', newPassword);
        // After updating the password, hide the form
        setShowPasswordForm(false);
    };

    return (
        <div className="workout-list-background p-5 justify-content-center align-items-center fs-4">
            <Button variant="dark" onClick={handleBack}>
                <i class="fa-solid fa-arrow-left"> Back</i>
            </Button>
            <div className="pt-5">
                <FormContainer className="body-color ">
                    <h1 className="mt-3 fw-bold">Personal Setting</h1>
                    <div className="px-5 mt-3">
                        <Row className="my-3">
                            <Col md={6}>
                                <strong>Username:</strong>
                            </Col>
                            <Col md={6}>
                                <span id="username"> {username}</span>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <strong>E-Mail:</strong>
                            </Col>
                            <Col md={6}>
                                <span id="email"> {email}</span>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <strong>Password:</strong>
                            </Col>
                            <Col md={6}>
                                <span id="password"> ***********</span>
                                <Button
                                    variant="button"
                                    onClick={handlePasswordChange}
                                >
                                    Change password
                                </Button>
                            </Col>
                        </Row>
                        {showPasswordForm && (
                            <Form onSubmit={handlePasswordSubmit}>
                                <Form.Group controlId="newPassword">
                                    <Row>
                                        <Col md={6}>
                                            <Form.Label>
                                                New Password:
                                            </Form.Label>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) =>
                                                    setNewPassword(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <Button
                                                variant="primary"
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                        )}
                        <Row className="mb-3 dark-mode-toggle">
                            <Col md={6}>
                                <strong>Dark Mode:</strong>
                            </Col>
                            <Col md={6}>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    checked={darkmode}
                                    onChange={(e) =>
                                        setDarkmode(e.target.checked)
                                    }
                                />
                            </Col>
                        </Row>
                    </div>
                </FormContainer>
            </div>
        </div>
    );
};

export default PersonalSetting;
