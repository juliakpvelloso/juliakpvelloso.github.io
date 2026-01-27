import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Nextdoor from "./components/Nextdoor";
import SEER from "./components/Seer";
import SpinSync from "./components/SpinSync";
import PlaylistOrganizer from "./components/PlaylistOrganizer";
import EMS from "./components/EMS";
import MLLR from "./components/MLLR";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />         
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/nextdoor" element={<Nextdoor />} />
        <Route path="/seer" element={<SEER />} />
        <Route path="/spinsync" element={<SpinSync />} />
        <Route path="/playlistorganizer" element={<PlaylistOrganizer />} />
        <Route path="/ems" element={<EMS />} />
        <Route path="/mllr" element={<MLLR />} />
      </Routes>
    </Router>
  );
}

export default App;
