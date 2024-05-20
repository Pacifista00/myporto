import "./index.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Certification from "./components/Certification";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="font-poppins">
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Portfolio />
      <Certification />
      <Footer />
    </div>
  );
}

export default App;
