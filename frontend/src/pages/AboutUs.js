import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="workout-list-background p-5">
            <Container className="hero-div bg-transparent-info rounded-4 p-4">
                <Row>
                    <Col xs={12}>
                        <h1>About Us</h1>
                        <p className="fs-4">
                            Your Personal Workout Planner is a fitness platform
                            that empowers users to create customized workout
                            plans tailored to their goals and preferences.
                            Whether you're looking to build strength, improve
                            endurance, or enhance flexibility, our user-friendly
                            interface allows you to design the perfect regimen
                            that fits seamlessly into your lifestyle. No more
                            settling for generic routines. With Your Personal
                            Workout Planner, you're the architect of your
                            fitness destiny. Begin your journey today and embark
                            on the path to a healthier, stronger you!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
