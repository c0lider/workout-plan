import React from 'react';
import EmptyTeaser from '../Teasers/EmptyTeaser';
import AmountInput from '../AmountInput/AmountInput';
import { Col, Container, Row, Image } from 'react-bootstrap';

const ExerciseDetails = ({ exercise, onSetsChange, onRepsChange }) => {
    return (
        <EmptyTeaser>
            <Col xs={2} className="d-flex justify-content-center">
                {/* TODO: change image source */}
                <Image
                    src="https://static.strengthlevel.com/images/exercises/bench-press/bench-press-800.jpg"
                    thumbnail
                    width={150}
                    height={150}
                ></Image>
            </Col>
            <Col xs={6}>
                <a
                    href={`/exercises/${exercise.id}`}
                    className="text-decoration-none text-primary fs-2"
                >
                    {exercise.name}
                </a>
            </Col>

            <Col xs={4}>
                <Container fluid>
                    <Row>
                        <Col xs={6}>
                            <AmountInput
                                text="sets"
                                exercise={exercise}
                                value={exercise.sets}
                                onChange={onSetsChange}
                            />
                        </Col>

                        <Col xs={6}>
                            <AmountInput
                                text="reps"
                                exercise={exercise}
                                value={exercise.reps}
                                onChange={onRepsChange}
                            />
                        </Col>
                    </Row>
                </Container>
            </Col>
        </EmptyTeaser>
    );
};

export default ExerciseDetails;
