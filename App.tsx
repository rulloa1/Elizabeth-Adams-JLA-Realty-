import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import FeaturedListings from './components/FeaturedListings';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="relative">
        <Hero />
        <SearchSection />
        <FeaturedListings />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;