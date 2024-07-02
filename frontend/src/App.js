import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import List from './components/pages/Workout/WorkoutList';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import WorkoutDetails from './components/pages/Workout/WorkoutDetails';
import Layout from './components/layout/Layout/Layout';
import NotFound from './components/pages/NotFound/NotFound';
import ExerciseDetail from './components/pages/Exercises/ExerciseDetail';
import ExerciseList from './components/pages/Exercises/ExerciseList';
import AboutUs from './components/pages/AboutUs/AboutUs';
import CreateExercise from './components/pages/Exercises/CreateExercise';
import PersonalSetting from './components/layout/PersonalSettings/PersonalSettings';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workouts" element={<List />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<PersonalSetting />} />
                <Route path="/workouts/:id" element={<WorkoutDetails />} />
                <Route path="/exercises/add" element={<CreateExercise />} />
                <Route path="/exercises/:id" element={<ExerciseDetail />} />
                <Route
                    path="/workouts/:id/add-exercise"
                    element={<ExerciseList />}
                />
                <Route path="/about" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
