# Workout Planner App

Welcome to the Workout Planner App! This application helps users create and manage personalized workout plans, track their progress, and stay motivated on their fitness journey. Whether you're a seasoned athlete or just getting started with your fitness goals, our app provides the tools you need to succeed.

- [Workout Planner App](#workout-planner-app)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)
  - [Support](#support)


## Features

- **Landing Page**: Engaging landing page with a brief overview of the app's features and a call-to-action for new users to sign up.
- **User Authentication**: Secure user authentication system with email/password login and registration functionality.
- **Workout Plans**: Browse and create custom workout plans tailored to your fitness needs.
- **Exercise Library**: Access a comprehensive library of exercises with detailed instructions and demonstration videos.
- **Workout Details**: Set your reps, sets, and duration, to never forget your workout plan again
- **Customization**: Customize workout plans by adding, deleting, or modifying exercises to suit individual preferences and fitness levels.
- **Settings**: Personalize your experience with customizable settings, including user settings or app settings like units (kg/lb) and theme preferences (dark/light mode).
- **Contact Page**: Reach out to the development team with questions, feedback, or support requests via the contact form.
- **Legal Notice**: Access essential legal information such as terms of service and privacy policy for transparency and compliance.

## Technologies Used

- **Backend**:
  - Java Spring Boot for RESTful API development.
  - PostgreSQL database for data storage.
  - JSON Web Tokens (JWT) for secure user authentication.
- **Frontend**:
  - React.js for building dynamic and interactive user interfaces.
  - Sass for enhanced CSS preprocessing and styling.
  - Bootstrap for responsive design and UI components.
- **Development Tools**:
  - Docker for containerized deployment and management.
  - Git for version control and collaboration.
  - npm as build tool for the frontend
  - gradle as build tool for the backend

## Getting Started

To get started with the Workout Planner App, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/c0lider/workout-plan.git
   ```

2. **Setup database**:

If you do not have a local databse instance running yet, create one using the following command:

```
docker run -d --name workout-plan-container -e POSTGRES_USER=developer -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=workout-plan-db -p 5432:5432 postgres:13
```

If you already have a container set up, run it by using the following command:

```
docker start workout-plan-container
```

3. **Backend Setup**:
   - Navigate to the `backend` directory and configure the PostgreSQL database connection in the `application.properties` file.
   - Run the backend Spring Boot application using your IDE or the following command:
     ```bash
     ./gradlew spring-boot:run
     ```

4. **Frontend Setup**:
   - Navigate to the `frontend` directory and install the required dependencies using npm or yarn:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

5. **Access the Application**: Once the backend and frontend servers are running, access the application by navigating to `http://localhost:3000` in your web browser.

## Contributing

We welcome contributions from the community to help improve the Workout Planner App! If you'd like to contribute, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and ensure they adhere to the project coding style and guidelines.
- Write clear and concise commit messages explaining the purpose of your changes.
- Open a pull request, providing a detailed description of the changes and any related issues.

## License

The Workout Planner App is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute the code for personal or commercial purposes. However, we kindly request that you include attribution to the original project and retain the license notice in any derived works.

## Support

If you encounter any issues or have questions about the Workout Planner App, please [open an issue](https://github.com/c0lider/workout-planner/issues) on GitHub or contact the development team via the contact form on the application's website.
