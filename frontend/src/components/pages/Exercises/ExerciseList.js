import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GoBack from '../../common/BackButton/BackButton';
import { Container } from 'react-bootstrap';
import ExerciseIntro from '../../common/Exercise/ExerciseIntro';
import AddExerciseModal from '../../common/Modals/AddExerciseModal';
import Notification from '../../common/Notification/Notification';
import AddTeaser from '../../common/Teasers/AddTeaser';
import Headline from '../../common/Headline/Headline';

const ExerciseList = () => {
    const { id } = useParams();
    const [exercises, setExercises] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentExerciseId, setCurrentExerciseId] = useState(-1);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [showToast, setShowToast] = useState(false);

    const toastMessage = 'Exercise added to routine';

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
        {
            name: 'Push-ups',
            id: 7,
            sets: 3,
            reps: 15,
            order: 7,
        },
        {
            name: 'Lunges',
            id: 8,
            sets: 3,
            reps: 12,
            order: 8,
        },
        {
            name: 'Shoulder Press',
            id: 9,
            sets: 4,
            reps: 10,
            order: 9,
        },
        {
            name: 'Bicep Curls',
            id: 10,
            sets: 3,
            reps: 12,
            order: 10,
        },
        {
            name: 'Leg Press',
            id: 11,
            sets: 4,
            reps: 10,
            order: 11,
        },
        {
            name: 'Lat Pulldowns',
            id: 12,
            sets: 3,
            reps: 10,
            order: 12,
        },
        {
            name: 'Chest Press',
            id: 13,
            sets: 3,
            reps: 12,
            order: 13,
        },
        {
            name: 'Hamstring Curls',
            id: 14,
            sets: 4,
            reps: 10,
            order: 14,
        },
        {
            name: 'Calf Raises',
            id: 15,
            sets: 3,
            reps: 15,
            order: 15,
        },
        {
            name: 'Plank',
            id: 16,
            sets: 3,
            reps: 30,
            order: 16,
        },
    ];

    useEffect(() => {
        setExercises([...dummyExercises]);
        // fetch(`http://localhost:8000/api/exercises/`)
        //     .then((response) => response.json())
        //     .then((data) => setExercises(data))
        //     .catch((error) => console.error('Error:', error));
    }, []);

    const addExerciseToRoutine = (exerciseId) => {
        setCurrentExerciseId(exerciseId);
        console.log('add exercise ', exerciseId, ' to routine ', id);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const submitExercise = () => {
        // TODO: implement post to server
        console.log(
            'add exercise ',
            currentExerciseId,
            ' to routine ',
            id,
            ' with ',
            sets,
            ' sets ',
            reps,
            ' reps'
        );

        toggleShowToast();
    };

    // TODO: create ticket and implement
    const createExercise = () => {};

    const toggleShowToast = () => setShowToast(!showToast);

    const updateSets = (amount) => {
        setSets(amount);
    };

    const updateReps = (amount) => {
        setReps(amount);
    };

    return (
        <>
            <div className="workout-list-background p-5">
                <GoBack />

                <Headline title="Add Exercises to your routine" />

                <Container>
                    {exercises
                        .sort((a, b) => a.order - b.order)
                        .map((exercise) => (
                            <ExerciseIntro
                                key={exercise.id}
                                exercise={exercise}
                                onAddExercise={addExerciseToRoutine}
                            />
                        ))}

                    <AddTeaser
                        text="Create exercise"
                        onClick={createExercise}
                    />
                </Container>
            </div>

            <AddExerciseModal
                sets={sets}
                reps={reps}
                showModal={showModal}
                updateReps={updateReps}
                updateSets={updateSets}
                submitExercise={submitExercise}
                handleClose={handleClose}
            />

            <Notification
                message={toastMessage}
                showToast={showToast}
                onClose={toggleShowToast}
            />
        </>
    );
};

export default ExerciseList;
