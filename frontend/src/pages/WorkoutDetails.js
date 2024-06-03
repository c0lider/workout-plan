import React from 'react';
import { useParams } from 'react-router-dom';

const WorkoutDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Workout Details {id}</h2>
        </div>
    );
};

export default WorkoutDetails;
