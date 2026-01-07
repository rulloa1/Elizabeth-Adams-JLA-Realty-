import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Custom Abstract Monogram/House Icon */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Outer Shape - Hexagon */}
        <path 
          d="M20 2L36 11V29L20 38L4 29V11L20 2Z" 
          className={isDark ? "stroke-brand-primary fill-blue-50" : "stroke-white fill-white/10"} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Inner Abstract House/Key Detail */}
        <path 
          d="M20 12V26M13 16L20 12L27 16" 
          className={isDark ? "stroke-brand-primary" : "stroke-white"} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Accent Dot */}
        <circle 
          cx="20" 
          cy="26" 
          r="2.5" 
          className={isDark ? "fill-brand-primary" : "fill-white"} 
        />
      </svg>
      
      <div className="flex flex-col justify-center">
        <span className={`text-lg font-bold tracking-tight leading-none uppercase ${isDark ? 'text-slate-900' : 'text-white'}`}>
          Ruth Al-Khudhairy
        </span>
        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          HomeSmart
        </span>
      </div>
    </div>
  );
};

export default Logo;