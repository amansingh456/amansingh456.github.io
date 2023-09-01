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
      <Skill/>
      <Git/>
      <Contact/>
      <Footer/>
      {/* want to add extra things */}
      {/* Although can do anything from here.. */}
      hello bruh
    </div>
  );
}

export default App;

