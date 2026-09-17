import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Photography from './components/photography';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Photography />
        <GitHub />
        <Contact />

      </main>
    </>
  );
}

export default App;