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
          <Route path="/Projects" element={<News />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Course" element={<Course />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
