import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GoBack from '../../common/BackButton/BackButton';
import { Container } from 'react-bootstrap';
import ExerciseIntro from '../../common/Exercise/ExerciseIntro';
import AddExerciseModal from '../../common/Modals/AddExerciseModal';
import AddTeaser from '../../common/Teasers/AddTeaser';
import Headline from '../../common/Headline/Headline';

const ExerciseList = () => {
    const { id } = useParams();
    const [exercises, setExercises] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentExerciseId, setCurrentExerciseId] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/exercises`)
            .then((response) => response.json())
            // .then((data) => console.log(data))
            .then((data) => setExercises(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    const createNewExercise = () => {
        navigate('/exercises/add');
    };

    const handleAddExercise = (exerciseId) => {
        setCurrentExerciseId(exerciseId);
        setShowModal(true);
    };

    return (
        <>
            <div className="workout-list-background p-5">
                <GoBack />

                <Headline title="Add Exercises to your routine" />

                <Container>
                    {exercises &&
                        exercises.map((exercise) => (
                            <ExerciseIntro
                                key={exercise.id}
                                exercise={exercise}
                                onAddExercise={() =>
                                    handleAddExercise(exercise.id)
                                }
                            />
                        ))}

                    <AddTeaser
                        text="Create exercise"
                        onClick={createNewExercise}
                    />
                </Container>
            </div>

            <AddExerciseModal
                exerciseId={currentExerciseId}
                workoutPlanId={id}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    );
};

export default ExerciseList;
