import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/Courses.jsx";
import './App.css';


// Homepage component
function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0e0e0e] text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Welcome to DIVD Academy</h1>
      <p className="text-gray-300 mb-6 text-center max-w-md">
        Learn cybersecurity skills through our hands-on courses. Click below to explore.
      </p>
      <a
        href="/courses"
        className="bg-yellow-400 text-[#0e0e0e] font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition"
      >
        View Courses
      </a>
    </div>
  );
}

// Main App with routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      {/* Onbekende routes → terug naar homepage */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
