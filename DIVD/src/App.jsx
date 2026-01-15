<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Course from "./pages/Course";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Course" element={<Course />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
=======
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/Courses.jsx";
import './App.css';



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

// Main App met routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      {/* Onbekende routes = terug naar homepage */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
>>>>>>> Courses-page
}

export default App;
