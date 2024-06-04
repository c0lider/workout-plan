import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/WorkoutList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
