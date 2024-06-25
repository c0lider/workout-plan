import React from 'react';
import Button from 'react-bootstrap/Button';
import InfoContainer from '../../common/InfoContainer/InfoContainer';

const Home = () => {
    const infoText = `Unlock your fitness journey by taking control of your
                    workout routines. With our intuitive platform, you have the
                    power to craft customized workout plans tailored to your
                    goals and preferences. Whether you're aiming to build
                    strength, improve endurance, or enhance flexibility, our
                    user-friendly interface empowers you to design the perfect
                    regimen that fits seamlessly into your lifestyle. No more
                    settling for generic routines. With Your Personal Workout
                    Planner, you're the architect of your fitness destiny. Begin
                    your journey today and embark on the path to a healthier,
                    stronger you!`;

    return (
        <div className="landing-page-background">
            <InfoContainer
                title={'Transform Your Fitness Journey'}
                text={infoText}
            >
                <Button className="fs-4">Get Started</Button>
            </InfoContainer>
        </div>
    );
};

export default Home;
