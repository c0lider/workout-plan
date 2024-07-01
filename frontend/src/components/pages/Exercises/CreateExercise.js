import React from 'react';
import { useState } from 'react';
import {
    Col,
    Container,
    FormLabel,
    Row,
    Ratio,
    FormControl,
} from 'react-bootstrap';
import GoBack from '../../common/BackButton/BackButton';
import WorkoutTitle from '../../common/WorkoutTitle/WorkoutTitle';
import SaveButton from '../../common/SaveButton/SaveButton';
import { Form } from 'react-router-dom';

const CreateExercise = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [description, setDescription] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');

    const saveExercise = async () => {
        console.log(
            JSON.stringify({
                exerciseName: exerciseName,
                youtubeLink: youtubeLink,
                description: description,
            })
        );
        const respone = await fetch('http://localhost:8080/api/exercises', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                exerciseName: exerciseName,
                youtubeLink: youtubeLink,
                description: description,
            }),
        });
    };

    return (
        <div className="workout-list-background p-5">
            <GoBack />

            <WorkoutTitle
                setText={setExerciseName}
                placeholder={'Exercise Name'}
                text={exerciseName}
            />

            <SaveButton onClick={saveExercise} />

            <Container>
                <Row className="mt-5">
                    <Col
                        xs={12}
                        className="bg-transparent-info fs-4 rounded-2 border-secondary p-3 mb-3 text-secondary"
                    >
                        <FormLabel className="fw-bold display">
                            Youtube Link
                        </FormLabel>
                        <FormControl
                            type="text"
                            className="text-info"
                            value={youtubeLink}
                            onChange={(e) => {
                                setYoutubeLink(e.target.value);
                            }}
                        />
                    </Col>
                    <Col
                        xs={12}
                        className="bg-transparent-info fs-4 rounded-2 border-secondary p-3 text-secondary"
                    >
                        <FormLabel className="fw-bold">Description</FormLabel>
                        <FormControl
                            as="textarea"
                            rows={5}
                            className="text-info"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CreateExercise;
