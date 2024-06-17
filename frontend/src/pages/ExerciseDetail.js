import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBack from '../components/GoBack';
import { FormLabel, Container, Row, Col, Image } from 'react-bootstrap';

function ExerciseDetail() {
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

            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="text-center text-info fw-bold p-3 bg-secondary border-info border-1 border rounded-1">
                            {exercise.name}
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6}>
                        <Image
                            src="https://static.strengthlevel.com/images/exercises/bench-press/bench-press-800.jpg"
                            thumbnail
                        />
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
