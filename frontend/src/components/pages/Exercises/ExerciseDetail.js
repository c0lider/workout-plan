import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBack from '../../common/BackButton/BackButton';
import { FormLabel, Container, Row, Col, Image, Ratio } from 'react-bootstrap';
import Headline from '../../common/Headline/Headline';

function ExerciseDetail() {
    // Needed for the URL parameter
    const { id } = useParams();
    const [exercise, setExercise] = useState('');

    // TODO fetch the actual exercise data from the backend
    const dummyExercise = {
        name: 'Bench Press',
        description:
            'The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles. A barbell is generally used to hold the weight, but a pair of dumbbells can also be used.',
    };

    useEffect(() => {
        console.log('text');
        setExercise(dummyExercise);
        // fetch(`http://localhost:8000/api/exercises/${id}`)
        //     .then((response) => response.json())
        //     .then((data) => setExercise(data))
        //     .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="workout-list-background p-5">
            <GoBack />

            <Headline title={exercise.name} />

            <Container>
                <Row className="mt-5">
                    <Col xs={12} md={6}>
                        <Ratio aspectRatio="16x9">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/t3f2L7NRRUY?si=znOlJlqcdjdrm8AA"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </Ratio>
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        className="bg-transparent-info fs-4 rounded-2 border-secondary p-3 text-secondary"
                    >
                        <FormLabel className="fw-bold">Description</FormLabel>
                        <p>{dummyExercise.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ExerciseDetail;
