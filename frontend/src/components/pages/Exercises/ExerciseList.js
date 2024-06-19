import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GoBack from '../../common/BackButton/BackButton';
import {
    Container,
    Row,
    Col,
    Image,
    Modal,
    Button,
    Form,
} from 'react-bootstrap';

const ExerciseList = () => {
    const { id } = useParams();
    const [exercises, setExercises] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentExerciseId, setCurrentExerciseId] = useState(-1);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);

    const dummyExercises = [
        {
            name: 'Bench Press',
            id: 1,
            sets: 3,
            reps: 10,
            order: 100,
        },
        {
            name: 'Dumbbell Flyes',
            id: 2,
            sets: 3,
            reps: 12,
            order: 2,
        },
        {
            name: 'Tricep Dips',
            id: 3,
            sets: 4,
            reps: 8,
            order: 3,
        },
        {
            name: 'Squat',
            id: 4,
            sets: 4,
            reps: 10,
            order: 4,
        },
        {
            name: 'Deadlift',
            id: 5,
            sets: 3,
            reps: 8,
            order: 5,
        },
        {
            name: 'Pull-ups',
            id: 6,
            sets: 3,
            reps: 10,
            order: 6,
        },
        {
            name: 'Push-ups',
            id: 7,
            sets: 3,
            reps: 15,
            order: 7,
        },
        {
            name: 'Lunges',
            id: 8,
            sets: 3,
            reps: 12,
            order: 8,
        },
        {
            name: 'Shoulder Press',
            id: 9,
            sets: 4,
            reps: 10,
            order: 9,
        },
        {
            name: 'Bicep Curls',
            id: 10,
            sets: 3,
            reps: 12,
            order: 10,
        },
        {
            name: 'Leg Press',
            id: 11,
            sets: 4,
            reps: 10,
            order: 11,
        },
        {
            name: 'Lat Pulldowns',
            id: 12,
            sets: 3,
            reps: 10,
            order: 12,
        },
        {
            name: 'Chest Press',
            id: 13,
            sets: 3,
            reps: 12,
            order: 13,
        },
        {
            name: 'Hamstring Curls',
            id: 14,
            sets: 4,
            reps: 10,
            order: 14,
        },
        {
            name: 'Calf Raises',
            id: 15,
            sets: 3,
            reps: 15,
            order: 15,
        },
        {
            name: 'Plank',
            id: 16,
            sets: 3,
            reps: 30,
            order: 16,
        },
    ];

    useEffect(() => {
        setExercises([...dummyExercises]);
        // fetch(`http://localhost:8000/api/exercises/`)
        //     .then((response) => response.json())
        //     .then((data) => setExercises(data))
        //     .catch((error) => console.error('Error:', error));
    }, []);

    const addExerciseToRoutine = (exerciseId) => {
        setCurrentExerciseId(exerciseId);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const submitExercise = () => {
        setShowModal(false);
        // TODO: implement post to server
        console.log(
            'add exercise ',
            currentExerciseId,
            ' to routine ',
            id,
            ' with ',
            sets,
            ' sets ',
            reps,
            ' reps'
        );
    };

    // TODO: create ticket and implement
    const createExercise = () => {};

    return (
        <>
            <div className="workout-list-background p-5">
                <GoBack />
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1 className="text-center text-info fw-bold p-3 bg-secondary border-info border-1 border rounded-1">
                                Add Exercises to your routine
                                {/* TODO workout name */}
                            </h1>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    {exercises
                        .sort((a, b) => a.order - b.order)
                        .map((exercise) => (
                            <Row
                                className="workout-teaser animate-new"
                                key={exercise.id}
                            >
                                <Col
                                    xs={2}
                                    className="d-flex justify-content-center"
                                >
                                    <Image
                                        src="https://static.strengthlevel.com/images/exercises/bench-press/bench-press-800.jpg"
                                        thumbnail
                                        width={150}
                                        height={150}
                                        className=""
                                    ></Image>
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
                                    onClick={() =>
                                        addExerciseToRoutine(exercise.id)
                                    }
                                >
                                    <i className="fa-solid fa-circle-plus"></i>
                                </Col>
                            </Row>
                        ))}
                    <Row className="workout-teaser" key={0}>
                        <Col xs={12} className="d-flex justify-content-center">
                            <a
                                onClick={() => createExercise()}
                                className="text-decoration-none text-primary"
                            >
                                <i className="fa-solid fa-circle-plus me-4"></i>{' '}
                                Create exercise
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Exercise Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-secondary bg-info">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <Form>
                                    <Form.Group controlId="formNumber1">
                                        <Form.Label>Sets</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter number 1"
                                            value={sets}
                                            onChange={(e) =>
                                                setSets(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formNumber2">
                                        <Form.Label>Reps</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter number 2"
                                            value={reps}
                                            onChange={(e) =>
                                                setReps(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="info" onClick={submitExercise}>
                        Add Exercise
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ExerciseList;
