import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Git from "./components/Git/Git";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skill";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      {/* up to here all ok */}
      <Skill/>
      <Git/>
      <Contact/>
      <Footer/>
      {/*so far so good */}
    </div>
  );
}

export default App;

