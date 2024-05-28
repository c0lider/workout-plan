import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="background-div position-relative">
                <div className="hero-div bg-transparent-secondary rounded-4 p-4">
                    <h1 className="mb-2">Transform Your Fitness Journey</h1>
                    <div className="my-2 fs-4">
                        Unlock your fitness journey by taking control of your
                        workout routines. With our intuitive platform, you have
                        the power to craft customized workout plans tailored to
                        your goals and preferences. Whether you're aiming to
                        build strength, improve endurance, or enhance
                        flexibility, our user-friendly interface empowers you to
                        design the perfect regimen that fits seamlessly into
                        your lifestyle. No more settling for generic routines.
                        With Your Personal Workout Planner, you're the architect
                        of your fitness destiny. Begin your journey today and
                        embark on the path to a healthier, stronger you!
                    </div>
                    <button className="btn btn-primary mt-2 fs-4">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
