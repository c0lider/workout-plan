import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/WorkoutList';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkoutDetails from './pages/WorkoutDetails';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workouts" element={<List />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/workouts/:id" element={<WorkoutDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
