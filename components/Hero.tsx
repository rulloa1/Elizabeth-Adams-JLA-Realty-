import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-600025529888?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
        {/* Premium Overlay: Gradient from bottom and top */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
          #1 Real Estate Agency in Spring, TX
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
          Live the life <br />
          you <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white font-serif italic">imagined.</span>
        </h1>

        <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
          Curated properties and exclusive listings in Spring's most sought-after neighborhoods. Experience the difference of dedicated local expertise.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;