import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Photography from './components/Photography';
import GitHub from './components/GitHub';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('main .section');

    if (!sections.length) {
      return;
    }

    sections.forEach((section) => {
      section.classList.add('reveal-ready');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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