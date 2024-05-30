import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/WorkoutList';
import Layout from './layout/Layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workouts" element={<List />} />
            </Routes>
        </Layout>
    );
}

export default App;
