import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBack from '../../common/BackButton/BackButton';
import { FormLabel, Container, Row, Col, Image, Ratio } from 'react-bootstrap';
import Headline from '../../common/Headline/Headline';

function ExerciseDetail() {
    // Needed for the URL parameter
    const { id } = useParams();
    const [exercise, setExercise] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/api/exercises/${id}`)
            .then((response) => response.json())
            .then((data) => setExercise(data))
            .catch((error) => console.error('Error:', error));

        console.log(exercise.youtubeLink);
    }, []);

    return (
        <div className="workout-list-background p-5">
            <GoBack />

            <Headline title={exercise.exerciseName} />

            <Container>
                <Row className="mt-5">
                    <Col xs={12} md={6}>
                        <Ratio aspectRatio="16x9">
                            {exercise !== '' ? (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={exercise.youtubeLink}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </Ratio>
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        className="bg-transparent-info fs-4 rounded-2 border-secondary p-3 text-secondary"
                    >
                        <FormLabel className="fw-bold">Description</FormLabel>
                        <p>{exercise.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ExerciseDetail;
