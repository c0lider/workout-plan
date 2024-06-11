import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <Navbar
            variant="dark"
            expand="lg"
            className="header sticky-top bg-secondary"
        >
            <Container>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/workouts">Programs</Nav.Link>
                    <Nav.Link href="#">About us</Nav.Link>
                </Nav>
                <Nav>
                    <Button
                        variant="outline-light"
                        className="mr-2"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Button variant="light" onClick={handleRegister}>
                        Register
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
