import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="col-12">
                <h1 className="h1">This is our homepage</h1>
                <Link to="/workouts">Workouts</Link>
                <button className="btn btn-primary login-button">Login</button>
            </div>
        </div>
    );
};

export default Home;
