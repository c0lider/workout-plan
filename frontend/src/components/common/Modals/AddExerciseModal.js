import React from 'react';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';
import Notification from '../Notification/Notification';
import { useState } from 'react';

const AddExerciseModal = ({
    exerciseId,
    workoutPlanId,
    showModal,
    setShowModal,
}) => {
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);

    const [showToast, setShowToast] = useState(false);
    const toastMessage = 'Exercise added to routine';

    const toggleShowToast = () => setShowToast(!showToast);

    const onCancel = () => {
        handleClose();
    };

    const onSubmit = () => {
        submitExercise();
        handleClose();
    };

    const submitExercise = () => {
        console.log(
            JSON.stringify({
                exerciseId: exerciseId,
                sets: sets,
                reps: reps,
                weight: 0,
            })
        );

        fetch(`http://localhost:8080/api/workouts/${workoutPlanId}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                exerciseId: exerciseId,
                sets: sets,
                reps: reps,
                weight: 0,
            }),
        }).then((response) => {
            if (response.ok) {
                toggleShowToast();
            } else {
                console.error('Error:', response);
            }
        });
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
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
                                            className="text-info"
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
                                            className="text-info"
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
                    <Button variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button variant="info" onClick={onSubmit}>
                        Add Exercise
                    </Button>
                </Modal.Footer>
            </Modal>

            <Notification
                message="Exercise added"
                showToast={showToast}
                onClose={toggleShowToast}
            />
        </>
    );
};

export default AddExerciseModal;
