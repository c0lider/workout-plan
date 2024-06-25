import React from 'react';
import InfoContainer from '../../common/InfoContainer/InfoContainer';

const AboutUs = () => {
    const infoText = `Your Personal Workout Planner is a fitness platform
                            that empowers users to create customized workout
                            plans tailored to their goals and preferences.
                            Whether you're looking to build strength, improve
                            endurance, or enhance flexibility, our user-friendly
                            interface allows you to design the perfect regimen
                            that fits seamlessly into your lifestyle. No more
                            settling for generic routines. With Your Personal
                            Workout Planner, you're the architect of your
                            fitness destiny. Begin your journey today and embark
                            on the path to a healthier, stronger you!
                        `;

    return (
        <div className="workout-list-background p-5">
            <InfoContainer title={'About Us'} text={infoText} />;
        </div>
    );
};

export default AboutUs;
