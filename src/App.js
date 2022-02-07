import Intro from "./components/Intro";
import Aboutme from "./components/Aboutme";
import Skill from "./components/Skill";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Nav />
      </div>
      <div className="show--case">
        <Intro />
        <Aboutme />
        <Skill />
      </div>
    </div>
  );
}

export default App;
