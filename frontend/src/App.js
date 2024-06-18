import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/WorkoutList';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkoutDetails from './pages/WorkoutDetails';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import ExerciseDetail from './pages/ExerciseDetail';
import ExerciseList from './pages/ExerciseList';
import AboutUs from './pages/AboutUs';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workouts" element={<List />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/workouts/:id" element={<WorkoutDetails />} />
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
