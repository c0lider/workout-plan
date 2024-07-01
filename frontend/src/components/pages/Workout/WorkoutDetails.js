import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import GoBack from '../../common/BackButton/BackButton';
import Notification from '../../common/Notification/Notification';
import AddTeaser from '../../common/Teasers/AddTeaser';
import SaveButton from '../../common/SaveButton/SaveButton';
import WorkoutTitle from '../../common/WorkoutTitle/WorkoutTitle';
import ExerciseDetails from '../../common/Exercise/ExerciseDetails';

const WorkoutDetails = () => {
    const { id } = useParams();
    const [exercises, setExercises] = useState([]);
    const [toastMessage, setToastMessage] = useState('Workout saved');
    const [workoutName, setWorkoutName] = useState('');

    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/api/workouts/${id}`)
            .then((response) => response.json())
            // .then((data) => console.log(data.exercises))
            .then((data) => {
                setExercises(data.exercises);
                setWorkoutName(data.workoutName);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    const addExercise = () => {
        navigate(`/workouts/${id}/add-exercise`);
    };

    const toggleShowToast = () => setShowToast(!showToast);

    const saveWorkout = () => {
        // TODO:

        fetch(`http://localhost:8080/api/workouts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                workoutName: workoutName,
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));

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

    const onWeightChange = (weight, exerciseId) => {
        const updatedExercise = {
            ...exercises.find((ex) => ex.id === exerciseId),
            weight: weight,
        };
        const updatedExercises = exercises.map((ex) =>
            ex.id === exerciseId ? updatedExercise : ex
        );
        setExercises(updatedExercises);

        console.log(exerciseId, weight);
    };

    return (
        <>
            <div className="workout-list-background p-5">
                <GoBack />

                <WorkoutTitle
                    setText={setWorkoutName}
                    placeholder="Enter workout name"
                    text={workoutName}
                />

                <SaveButton onClick={saveWorkout} />

                <Container>
                    {exercises &&
                        exercises.map((exercise) => (
                            <ExerciseDetails
                                key={exercise.exerciseEntity.id}
                                exercise={exercise}
                                onSetsChange={onSetsChange}
                                onRepsChange={onRepsChange}
                                onWeightChange={onWeightChange}
                            />
                        ))}
                    <AddTeaser text="Add Exercise/s" onClick={addExercise} />
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
