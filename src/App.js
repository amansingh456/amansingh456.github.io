import "./App.css";
// color 5fe4c9
import { Projects } from "./Pages/Projects";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Skills } from "./Pages/Skills";
import { Contact } from "./Pages/Contact";
import mainLogo from "./Images/mainLogo.gif";
import ParticlesBubble from "./particles/Particles";
import { useEffect, useState } from "react";
import { GitLanguages } from "./Pages/gitLanguages";
import { GitHubStreak } from "./Pages/gitHubStats";
import { GitHubStats } from "./Pages/gitStats";
import Exp from "./Pages/Exp";
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  });
  return loader ? (
    <div className="loader">
      <div>
        <img src={mainLogo} alt="loader" />
      </div>
    </div>
  ) : (
    <div className="App">
      <ParticlesBubble />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Exp />
      <Projects />
      <GitHubStreak />
      <GitHubStats />
      <GitLanguages />
      <Contact />
      <div
        style={{ color: "#CCD6F6", marginTop: "120px", marginBottom: "20px" }}
      >
        <span style={{ color: "#8892B0", fontWeight: 200 }}>
          Designed & Developed by
        </span>{" "}
        Aman Singh Rajawat
      </div>
    </div>
  );
}

export default App;
