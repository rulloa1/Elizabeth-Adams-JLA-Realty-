import React, { useState } from 'react';
import { ArrowRight, Bed, Bath, Move, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../types';

const ListingCard: React.FC<{ listing: Property }> = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % listing.imageUrls.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + listing.imageUrls.length) % listing.imageUrls.length);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`View details clicked for property: ${listing.title} (${listing.id})`);
  };

  return (
    <div className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden group/image shrink-0">
        <img 
          src={listing.imageUrls[currentImageIndex]} 
          alt={listing.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 pointer-events-none" />
        
        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevImage}
            className="bg-white/90 hover:bg-white text-slate-900 p-1.5 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={nextImage}
            className="bg-white/90 hover:bg-white text-slate-900 p-1.5 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
          {listing.imageUrls.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all duration-300 ${
                idx === currentImageIndex ? 'bg-white scale-110' : 'bg-white/40'
              }`} 
            />
          ))}
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {listing.tags.map((tag) => {
            let badgeColor = 'bg-blue-600';
            if (tag === 'Luxury') badgeColor = 'bg-indigo-600';
            if (tag === 'Open House') badgeColor = 'bg-emerald-600';
            if (tag === 'Pool') badgeColor = 'bg-cyan-600';
            
            return (
              <span key={tag} className={`${badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide shadow-sm`}>
                {tag}
              </span>
            );
          })}
        </div>
        
        <div className="absolute bottom-4 left-4">
            <span className="text-2xl font-bold text-white shadow-black drop-shadow-md">{listing.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{listing.title}</h3>
            <p className="text-slate-500 text-sm flex items-center gap-1 mt-1 mb-3">
              <MapPin size={14} className="text-slate-400" /> {listing.location}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
              {listing.description}
            </p>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between py-4 border-t border-slate-100 text-slate-600 text-sm font-medium">
            <div className="flex items-center gap-1.5">
                <Bed size={16} className="text-slate-400" />
                <span>{listing.beds} bd</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Bath size={16} className="text-slate-400" />
                <span>{listing.baths} ba</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Move size={16} className="text-slate-400" />
                <span>{listing.sqft} sqft</span>
            </div>
          </div>

          <button 
            onClick={handleViewDetails}
            className="w-full bg-slate-50 hover:bg-brand-primary text-slate-900 hover:text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 border border-slate-200 hover:border-transparent"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedListings: React.FC = () => {
  const listings: Property[] = [
    {
      id: '1',
      title: 'Modern Farmhouse Estate',
      price: '$650,000',
      location: 'Gleannloch Farms, Spring, TX',
      beds: 4,
      baths: 3.5,
      sqft: '3,200',
      imageUrls: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80'
      ],
      tags: ['New Listing'],
      description: 'Experience luxury living in this custom-built modern farmhouse. Features high ceilings, a chef-inspired kitchen, and a private backyard oasis perfect for entertaining.'
    },
    {
      id: '2',
      title: 'Luxury Haven in Benders Landing',
      price: '$1,250,000',
      location: 'Benders Landing, Spring, TX',
      beds: 5,
      baths: 5,
      sqft: '4,850',
      imageUrls: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80'
      ],
      tags: ['Luxury', 'Pool'],
      description: 'Breathtaking estate on a 1-acre lot. Boasting a resort-style pool, home theater, wine grotto, and impeccable finishes throughout.'
    },
    {
      id: '3',
      title: 'Classic Brick Family Home',
      price: '$425,000',
      location: 'Spring Creek Oaks, Spring, TX',
      beds: 4,
      baths: 2.5,
      sqft: '2,800',
      imageUrls: [
        'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80'
      ],
      tags: ['Open House'],
      description: 'Charming traditional home zoned to top-rated schools. Offers spacious living areas, a renovated kitchen, and lush landscaping with mature trees.'
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Listings</h2>
          <p className="text-slate-500">Exclusive homes selected by our top agents.</p>
        </div>
        <button className="group flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-blue-700 transition-colors">
          View all properties
          <span className="bg-blue-50 p-1.5 rounded-full group-hover:bg-blue-100 transition-colors text-brand-primary">
             <ArrowRight size={14} />
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;