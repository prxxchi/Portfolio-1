import About from "../components/About";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Quote from "../components/Quote";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <div className="root">
        <Navbar />
        <Intro />
      </div>
      <Quote />
      <Skills />
      <Project />
      <About />
      <Footer />
    </div>
  );
}
