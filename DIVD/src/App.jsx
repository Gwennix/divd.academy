import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import News from "./pages/news";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Courses from "./pages/Courses";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
