import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

// TODO: remove dummy data and fetch data from backend
const WorkoutList = () => {
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
        // use dummy workouts
        setWorkouts([...dummyWorkouts]);

        // fetch('http://localhost:8000/api/workouts/')
        //     .then((response) => response.json())
        //     .then((data) => setWorkouts(data))
        //     .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="workout-list-background p-5">
            <div className="container">
                <ListGroup as="ul">
                    <ListGroup.Item as="li" className="workout-teaser" key={0}>
                        <a
                            href="/workouts/create"
                            className="text-decoration-none text-primary"
                        >
                            <i className="fa-solid fa-circle-plus me-4"></i> Add
                            routine
                        </a>
                    </ListGroup.Item>
                    {workouts.map((workout) => (
                        <ListGroup.Item
                            as="li"
                            className="workout-teaser"
                            key={workout.id}
                        >
                            <a
                                href={`workouts/${workout.id}`}
                                className="text-decoration-none text-primary"
                            >
                                {workout.name}
                            </a>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>
    );
};

export default WorkoutList;
