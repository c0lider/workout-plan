import React from 'react';
import { Row, Col, Ratio } from 'react-bootstrap';

const ExerciseIntro = ({ exercise, onAddExercise }) => {
    const handleClick = (id) => {
        onAddExercise(id);
    };

    return (
        <Row className="workout-teaser animate-new">
            <Col xs={2} className="d-flex justify-content-center">
                <Ratio aspectRatio="16x9">
                    <iframe
                        width="150"
                        height="150"
                        src={exercise.youtubeLink}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </Ratio>
            </Col>
            <Col xs={8}>
                <a
                    href={`/exercises/${exercise.id}`}
                    className="text-decoration-none text-primary fs-2"
                >
                    {exercise.exerciseName}
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
