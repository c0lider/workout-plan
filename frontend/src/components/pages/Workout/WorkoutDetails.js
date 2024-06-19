import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import GoBack from '../../common/BackButton/BackButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Toast, ToastContainer } from 'react-bootstrap';

// TODO: save on every change?
const WorkoutDetails = () => {
    const { id } = useParams();
    const [exercises, setExercises] = useState([]);
    const [toastMessage, setToastMessage] = useState('Workout saved');

    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

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
    ];

    useEffect(() => {
        // TODO: replace with real data

        setExercises([...dummyExercises]);

        // fetch(`http://localhost:8000/api/workouts/${id}/`)
        //     .then((response) => response.json())
        //     .then((data) => setWorkout(data))
        //     .catch((error) => console.error('Error:', error));
    }, []);

    const addExercise = () => {
        const newExercise = {
            name: 'New Exercise',
            id: 1000000,
            sets: '-',
            reps: '-',
            order: 1000000,
        };

        setExercises([newExercise, ...exercises]);

        setTimeout(() => {
            navigate(`/workouts/${id}/add-exercise`);
        }, 500);
    };
    const toggleShowToast = () => setShowToast(!showToast);

    const saveWorkout = () => {
        // if error set toast message to error message
        toggleShowToast();
    };

    return (
        <>
            <div className="workout-list-background p-5">
                <GoBack />
                <Container>
                    <Row>
                        <FormControl
                            type="text"
                            className="fs-1 text-info fw-bold text-center mb-4"
                            defaultValue={`Workout ${id}`}
                            placeholder="Enter workout name"
                        />
                    </Row>
                </Container>{' '}
                <Container>
                    <Row className="d-flex align-items-end">
                        <Col xs={12} className="d-flex justify-content-end">
                            <Button onClick={saveWorkout} variant="info">
                                <i class="fa-regular fa-2x fa-floppy-disk"></i>
                            </Button>
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
                                                <Form.Group>
                                                    <Form.Label className="fs-5 p-0 m-0">
                                                        sets
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="text-info"
                                                        value={exercise.sets}
                                                        onChange={(e) => {
                                                            const updatedExercise =
                                                                {
                                                                    ...exercise,
                                                                    sets: e
                                                                        .target
                                                                        .value,
                                                                };
                                                            const updatedExercises =
                                                                exercises.map(
                                                                    (ex) =>
                                                                        ex.id ===
                                                                        exercise.id
                                                                            ? updatedExercise
                                                                            : ex
                                                                );
                                                            setExercises(
                                                                updatedExercises
                                                            );
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>

                                            <Col xs={6}>
                                                <Form.Group>
                                                    <Form.Label className="fs-5 p-0 m-0">
                                                        reps
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="text-info"
                                                        value={exercise.reps}
                                                        onChange={(e) => {
                                                            const updatedExercise =
                                                                {
                                                                    ...exercise,
                                                                    reps: e
                                                                        .target
                                                                        .value,
                                                                };
                                                            const updatedExercises =
                                                                exercises.map(
                                                                    (ex) =>
                                                                        ex.id ===
                                                                        exercise.id
                                                                            ? updatedExercise
                                                                            : ex
                                                                );
                                                            setExercises(
                                                                updatedExercises
                                                            );
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        ))}
                    <Row className="workout-teaser" key={0}>
                        <Col xs={12} className="d-flex justify-content-center">
                            <a
                                onClick={() => addExercise()}
                                className="text-decoration-none text-primary"
                            >
                                <i className="fa-solid fa-circle-plus me-4"></i>{' '}
                                Add exercise
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <ToastContainer position="top-end" className="p-3">
                <Toast
                    show={showToast}
                    onClose={toggleShowToast}
                    delay={3000}
                    className="bg-info text-white border-0 rounded-3 p-3"
                    autohide
                >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Planner</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default WorkoutDetails;
