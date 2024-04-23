import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import List from './components/Workout/List';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<List />} />
        </Routes>
    );
}

export default App;
