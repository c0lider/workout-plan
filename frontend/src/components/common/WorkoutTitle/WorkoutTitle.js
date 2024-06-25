import React from 'react';
import { Container, Row, FormControl } from 'react-bootstrap';

const WorkoutTitle = ({ text, setText }) => {
    return (
        <Container>
            <Row>
                <FormControl
                    type="text"
                    className="fs-1 text-info fw-bold text-center mb-4"
                    value={text}
                    placeholder="Enter workout title"
                    onChange={(e) => setText(e.target.value)}
                />
            </Row>
        </Container>
    );
};

export default WorkoutTitle;
