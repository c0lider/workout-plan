import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AddTeaser from '../../common/Teasers/AddTeaser';
import TextTeaser from '../../common/Teasers/TextTeaser';

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
                <AddTeaser text="Add routine" onClick={addRoutine} />

                {workouts.map((workout) => (
                    <TextTeaser key={workout.id}>
                        <a
                            href={`/workouts/${workout.id}`}
                            className="text-decoration-none text-primary"
                        >
                            {workout.name}
                        </a>
                    </TextTeaser>
                ))}
            </Container>
        </div>
    );
};

export default WorkoutList;
