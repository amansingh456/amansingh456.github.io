import "./App.css";
import HeadersComponent from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "./Components/BodyComponents/AboutUs";
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "./Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";
import Experience from "./Components/BodyComponents/Experience";

function App() {
  return (
    <div>
      {/* // <h1>App works well</h1> */}
      <HeadersComponent />
      <AboutUs />
      <Portfolio />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
