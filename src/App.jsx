import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />         
        <Route path="/projects" element={<Projects />} /> 
      </Routes>
    </Router>
  );
}

export default App;
