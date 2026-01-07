import React from 'react';

const Watermark: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none opacity-[0.15] mix-blend-multiply">
      {/* Tilted Container to cover the screen with repeated text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] flex flex-wrap content-center justify-center gap-x-24 gap-y-32 transform -rotate-12">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="text-4xl md:text-6xl font-black text-slate-900 whitespace-nowrap border-4 border-slate-900 px-8 py-4 rounded-xl uppercase tracking-widest">
            Preview Only
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watermark;