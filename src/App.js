import Intro from "./components/Intro";
import Aboutme from "./components/Aboutme";
import Skill from "./components/Skill";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';
import {
  BrowserRouter as Router, Routes,Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          <Nav />
        </div>
        <Routes>
          {/* <div className="show--case"> */}
            <Route path = "" element = {<Intro />} />
            <Route path = "/home" element = {<Intro />} />
            <Route path = "/about" element = {<Aboutme />} />
            <Route path = "/skills" element = {<Skill />} />
            <Route path = "/projects" element = {<Projects />} />
            <Route path = "/contact" element = {<Contact />} />
          {/* </div> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
