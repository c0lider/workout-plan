import React from 'react';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';
import Notification from '../Notification/Notification';
import { useState } from 'react';

const AddExerciseModal = ({
    sets,
    reps,
    showModal,
    updateReps,
    updateSets,
    submitExercise,
    handleClose,
}) => {
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => setShowToast(!showToast);

    const onCancel = () => {
        handleClose();
    };

    const onSubmit = () => {
        submitExercise(sets, reps);
        handleClose();
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
                                                updateSets(e.target.value)
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
                                                updateReps(e.target.value)
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
