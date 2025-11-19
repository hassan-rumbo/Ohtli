import React, { Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './components/Footer';

// Lazy load sections for performance
const About = React.lazy(() => import('./sections/About'));
const Services = React.lazy(() => import('./sections/Services'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Process = React.lazy(() => import('./sections/Process'));
const Technologies = React.lazy(() => import('./sections/Technologies'));
const Testimonials = React.lazy(() => import('./sections/Testimonials'));
const Contact = React.lazy(() => import('./sections/Contact'));

// Loading fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-[50vh] bg-background text-white">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <HelmetProvider>
          <div className="bg-background min-h-screen text-[var(--color-text)] selection:bg-primary/30 transition-colors duration-500 relative">
            <div className="noise-bg"></div>
        <Helmet>
          <title>Ohtli | Boutique Software Studio</title>
          <meta name="description" content="Fusionamos tecnología y arte. Agencia de desarrollo de software boutique especializada en experiencias digitales inmersivas." />
          <meta name="theme-color" content="#050505" />
        </Helmet>

        <main>
          <Hero />
          <Navbar />
          
          <Suspense fallback={<Loading />}>
            <About />
            <Services />
            <Projects />
            <Process />
            <Technologies />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>
        
        <Footer />
      </div>
      </HelmetProvider>
    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
