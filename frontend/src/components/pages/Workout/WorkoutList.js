import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AddTeaser from '../../common/Teasers/AddTeaser';
import TextTeaser from '../../common/Teasers/TextTeaser';

const WorkoutList = () => {
    const navigate = useNavigate();
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/workouts')
            .then((response) => response.json())
            .then((data) => setWorkouts(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    const addRoutine = () => {
        fetch('http://localhost:8080/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                workoutName: 'New routine',
            }),
        })
            .then((response) => response.json())
            .then((newRoutine) => {
                setWorkouts([newRoutine, ...workouts]);
                console.log(newRoutine);
                navigate(`/workouts/${newRoutine.id}`);
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="workout-list-background p-5">
            <Container>
                <AddTeaser text="Add routine" onClick={addRoutine} />

                {workouts &&
                    workouts.map((workout) => (
                        <TextTeaser key={workout.id}>
                            <a
                                href={`/workouts/${workout.id}`}
                                className="text-decoration-none text-primary"
                            >
                                {workout.workoutName}
                            </a>
                        </TextTeaser>
                    ))}
            </Container>
        </div>
    );
};

export default WorkoutList;
