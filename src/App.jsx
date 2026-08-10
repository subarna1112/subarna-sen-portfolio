import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
      </main>
    </>
  );
}

export default App;