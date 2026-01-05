import React, { useState } from 'react';
import { Search, MapPin, DollarSign, SlidersHorizontal } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  return (
    <div className="relative z-30 -mt-24 px-6 mb-24">
      <div className="max-w-5xl mx-auto">
        {/* Search Container */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-2">
          
          {/* Tabs */}
          <div className="flex gap-2 p-2 mb-2">
            {['Buy', 'Rent', 'Sold'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2">
            
            {/* Location */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors">
                <MapPin size={22} />
              </div>
              <input 
                type="text" 
                placeholder="City, Neighborhood, or ZIP" 
                className="w-full h-16 pl-12 pr-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-brand-primary/20 focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 text-lg"
              />
            </div>

            {/* Price */}
            <div className="lg:col-span-3 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors">
                <DollarSign size={22} />
              </div>
              <select className="w-full h-16 pl-12 pr-10 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-brand-primary/20 focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all appearance-none font-medium text-slate-900 cursor-pointer">
                <option>Any Price</option>
                <option>$300k - $500k</option>
                <option>$500k - $800k</option>
                <option>$800k - $1.5M</option>
                <option>$1.5M+</option>
              </select>
            </div>

            {/* Filters */}
             <div className="lg:col-span-2 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors">
                <SlidersHorizontal size={20} />
              </div>
              <button className="w-full h-16 pl-12 pr-4 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-transparent outline-none transition-all text-left font-medium text-slate-900 flex items-center">
                Filters
              </button>
            </div>

            {/* Submit */}
            <div className="lg:col-span-2">
              <button className="w-full h-16 bg-brand-primary hover:bg-blue-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;