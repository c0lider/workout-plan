import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div className="container">
            <div className="col-12">
                <h1 className="h1">This is our homepage</h1>
                <Link to="/workouts">Workouts</Link>
                <Button>Login</Button>
            </div>
        </div>
    );
};

export default Home;
