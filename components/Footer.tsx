import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-slate-800" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your trusted partner for buying and selling homes in Spring, TX. Dedicated service, proven results.
            </p>
            
            <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                    <MapPin size={18} className="text-brand-primary mt-0.5 shrink-0" />
                    <span>Spring, TX (Home Based)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Phone size={18} className="text-brand-primary shrink-0" />
                    <span>(281) 610-3817</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Mail size={18} className="text-brand-primary shrink-0" />
                    <span>edelwhite_@hotmail.com</span>
                </div>
            </div>

            <div className="pt-4">
              <button className="bg-white text-brand-dark px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                 Contact Me
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div>
             <h4 className="text-white font-semibold mb-6">Browse</h4>
             <ul className="space-y-4 text-sm text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Homes for Sale</li>
                <li className="hover:text-white cursor-pointer transition-colors">Featured Listings</li>
                <li className="hover:text-white cursor-pointer transition-colors">Open Houses</li>
                <li className="hover:text-white cursor-pointer transition-colors">New Construction</li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-6">Services</h4>
             <ul className="space-y-4 text-sm text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Buying a Home</li>
                <li className="hover:text-white cursor-pointer transition-colors">Selling Your Home</li>
                <li className="hover:text-white cursor-pointer transition-colors">Market Analysis</li>
                <li className="hover:text-white cursor-pointer transition-colors">Relocation</li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-6">Resources</h4>
             <ul className="space-y-4 text-sm text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Market Reports</li>
                <li className="hover:text-white cursor-pointer transition-colors">Mortgage Calculator</li>
                <li className="hover:text-white cursor-pointer transition-colors">School Districts</li>
                <li className="hover:text-white cursor-pointer transition-colors">Zillow Profile</li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-slate-500 text-sm">© 2024 Ruth Al-Khudhairy / HomeSmart. All rights reserved.</p>
           <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">TREC Info</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;