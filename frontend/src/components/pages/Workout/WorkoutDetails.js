import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import GoBack from '../../common/BackButton/BackButton';
import Notification from '../../common/Notification/Notification';
import AddTeaser from '../../common/Teasers/AddTeaser';
import SaveButton from '../../common/SaveButton/SaveButton';
import WorkoutTitle from '../../common/WorkoutTitle/WorkoutTitle';
import ExerciseDetails from '../../common/Exercise/ExerciseDetails';

// TODO: save on every change?
const WorkoutDetails = () => {
    const { id } = useParams();
    const [exercises, setExercises] = useState([]);
    const [toastMessage, setToastMessage] = useState('Workout saved');
    const [workoutName, setWorkoutName] = useState('');

    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    const dummyExercises = [
        {
            name: 'Bench Press',
            id: 1,
            sets: 3,
            reps: 10,
            order: 100,
        },
        {
            name: 'Dumbbell Flyes',
            id: 2,
            sets: 3,
            reps: 12,
            order: 2,
        },
        {
            name: 'Tricep Dips',
            id: 3,
            sets: 4,
            reps: 8,
            order: 3,
        },
        {
            name: 'Squat',
            id: 4,
            sets: 4,
            reps: 10,
            order: 4,
        },
        {
            name: 'Deadlift',
            id: 5,
            sets: 3,
            reps: 8,
            order: 5,
        },
        {
            name: 'Pull-ups',
            id: 6,
            sets: 3,
            reps: 10,
            order: 6,
        },
    ];

    useEffect(() => {
        // TODO: replace with real data

        setExercises([...dummyExercises]);
        setWorkoutName(`Workout ${id}`);

        // fetch(`http://localhost:8000/api/workouts/${id}/`)
        //     .then((response) => response.json())
        //     .then((data) => setWorkout(data))
        //     .catch((error) => console.error('Error:', error));
    }, []);

    const addExercise = () => {
        const newExercise = {
            name: 'New Exercise',
            id: 1000000,
            sets: '-',
            reps: '-',
            order: 1000000,
        };

        setExercises([newExercise, ...exercises]);

        setTimeout(() => {
            navigate(`/workouts/${id}/add-exercise`);
        }, 500);
    };

    const toggleShowToast = () => setShowToast(!showToast);

    const saveWorkout = () => {
        // if error set toast message to error message
        toggleShowToast();
        console.log(workoutName);
    };

    const onRepsChange = (reps, exerciseId) => {
        const updatedExercise = {
            ...exercises.find((ex) => ex.id === exerciseId),
            reps: reps,
        };
        const updatedExercises = exercises.map((ex) =>
            ex.id === exerciseId ? updatedExercise : ex
        );
        setExercises(updatedExercises);

        console.log(exerciseId, reps);
    };

    const onSetsChange = (sets, exerciseId) => {
        const updatedExercise = {
            ...exercises.find((ex) => ex.id === exerciseId),
            sets: sets,
        };
        const updatedExercises = exercises.map((ex) =>
            ex.id === exerciseId ? updatedExercise : ex
        );
        setExercises(updatedExercises);

        console.log(exerciseId, sets);
    };

    return (
        <>
            <div className="workout-list-background p-5">
                <GoBack />

                <WorkoutTitle
                    setText={setWorkoutName}
                    placeholder={workoutName}
                    text={workoutName}
                />

                <SaveButton onClick={saveWorkout} />

                <Container>
                    {exercises
                        .sort((a, b) => a.order - b.order)
                        .map((exercise) => (
                            <ExerciseDetails
                                key={exercise.id}
                                exercise={exercise}
                                onSetsChange={onSetsChange}
                                onRepsChange={onRepsChange}
                            />
                        ))}
                    <AddTeaser text="Add Exercise" onClick={addExercise} />
                </Container>
            </div>

            <Notification
                message={toastMessage}
                showToast={showToast}
                onClose={toggleShowToast}
            />
        </>
    );
};

export default WorkoutDetails;
