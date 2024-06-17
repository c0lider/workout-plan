import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// TODO: remove dummy data and fetch data from backend
const WorkoutList = () => {
    const navigate = useNavigate();
    const dummyWorkouts = [
        {
            name: 'Chest & Triceps',
            id: 1,
        },
        {
            name: 'Back & Biceps',
            id: 2,
        },
        {
            name: 'Legs',
            id: 3,
        },
    ];

    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        // TODO: replace with real data
        setWorkouts([...dummyWorkouts]);

        // fetch('http://localhost:8000/api/workouts/')
        //     .then((response) => response.json())
        //     .then((data) => setWorkouts(data))
        //     .catch((error) => console.error('Error:', error));
    }, []);

    const addRoutine = () => {
        const newRoutine = {
            name: 'New Routine',
            // TODO: insert proper id
            id: workouts.length + 1,
        };
        setWorkouts([newRoutine, ...workouts]);

        setTimeout(() => {
            navigate(`/workouts/${newRoutine.id}`);
        }, 500);
    };

    return (
        <div className="workout-list-background p-5">
            <Container>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" className="workout-teaser" key={0}>
                        <a
                            onClick={() => addRoutine()}
                            className="text-decoration-none text-primary"
                        >
                            <i className="fa-solid fa-circle-plus me-4"></i> Add
                            routine
                        </a>
                    </ListGroup.Item>
                    {workouts.map((workout) => (
                        <ListGroup.Item
                            as="li"
                            className="workout-teaser animate-new"
                            key={workout.id}
                        >
                            <a
                                href={`/workouts/${workout.id}`}
                                className="text-decoration-none text-primary"
                            >
                                {workout.name}
                            </a>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default WorkoutList;
