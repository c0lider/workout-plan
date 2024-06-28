import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const ExerciseIntro = ({ exercise, onAddExercise }) => {
    const handleClick = (id) => {
        onAddExercise(id);
    };

    return (
        <Row className="workout-teaser animate-new">
            <Col xs={2} className="d-flex justify-content-center">
                <Image
                    src="https://static.strengthlevel.com/images/exercises/bench-press/bench-press-800.jpg"
                    thumbnail
                    width={150}
                    height={150}
                />
            </Col>
            <Col xs={8}>
                <a
                    href={`/exercises/${exercise.id}`}
                    className="text-decoration-none text-primary fs-2"
                >
                    {exercise.name}
                </a>
            </Col>
            <Col
                xs={2}
                className="d-flex justify-content-center cursor-pointer"
                onClick={() => handleClick(exercise.id)}
            >
                <i className="fa-solid fa-circle-plus"></i>
            </Col>
        </Row>
    );
};

export default ExerciseIntro;
