import React from 'react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-32 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image Composition */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ruth Al-Khudhairy Real Estate Agent" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg max-w-[200px]">
                <div className="flex gap-1 text-yellow-400 mb-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-xs font-bold text-slate-900">"Ruth made our dream home happen in record time!"</p>
              </div>
            </div>
            
            {/* Background Pattern Dots */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:16px_16px] -z-10" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-brand-primary"></span>
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase">About Ruth</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Not just an agent, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">your strategic partner.</span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              With deep expertise in Spring's real estate market, Ruth Al-Khudhairy brings a unique blend of data-driven strategy and concierge service. She doesn't just sell homes; she curates lifestyles and manages complex transactions with grace and precision.
            </p>

            <div className="grid grid-cols-2 gap-8 py-6 border-y border-slate-100">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-primary shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Top 1%</h4>
                  <p className="text-sm text-slate-500">Producer Nationwide</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-primary shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">1,200+</h4>
                  <p className="text-sm text-slate-500">Families Helped</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="group flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                Work with Ruth
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;