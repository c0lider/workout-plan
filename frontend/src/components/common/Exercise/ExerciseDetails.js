import React from 'react';
import EmptyTeaser from '../Teasers/EmptyTeaser';
import AmountInput from '../AmountInput/AmountInput';
import { Col, Container, Row, Image } from 'react-bootstrap';

const ExerciseDetails = ({
    exercise,
    onSetsChange,
    onRepsChange,
    onWeightChange,
}) => {
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
                    {exercise.exerciseEntity.exerciseName}
                </a>
            </Col>

            <Col xs={4}>
                <Container fluid>
                    <Row>
                        <Col xs={4}>
                            <AmountInput
                                text="sets"
                                exercise={exercise}
                                value={exercise.sets}
                                onChange={onSetsChange}
                            />
                        </Col>

                        <Col xs={4}>
                            <AmountInput
                                text="reps"
                                exercise={exercise}
                                value={exercise.reps}
                                onChange={onRepsChange}
                            />
                        </Col>

                        <Col xs={4}>
                            <AmountInput
                                text="weight"
                                exercise={exercise}
                                value={exercise.weight}
                                onChange={onWeightChange}
                            />
                        </Col>
                    </Row>
                </Container>
            </Col>
        </EmptyTeaser>
    );
};

export default ExerciseDetails;
