import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Technologies from './sections/Technologies';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  // Set document title
  useEffect(() => {
    document.title = 'Ohtli - Extra Premium Landing Page';
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-white font-sans">
          {/* Noise texture overlay */}
          <div className="noise-bg" />
          
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Process />
            <Technologies />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
