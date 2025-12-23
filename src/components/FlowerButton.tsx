import React from 'react';

export const FlowerButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 group transition-transform duration-300 hover:scale-110"
      aria-label="Get it now"
    >
      {/* Flower Container */}
      <div className="relative w-20 h-20 flex items-center justify-center animate-[spin_8s_linear_infinite]">
        
        {/* Petals - Layer 1 */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-8 h-12 bg-coral rounded-[50%] shadow-sm border border-coral-dark/10 origin-bottom"
            style={{
              marginLeft: '-1rem', // -w/2
              marginTop: '-3rem',  // -h
              transformOrigin: 'center bottom', // Rotate around the bottom of the petal (which is at the center of the flower)
              transform: `rotate(${i * 45}deg) translateY(10px)`, // translateY moves it out slightly or adjusts overlap
            }}
          />
        ))}

        {/* Petals - Layer 2 (Inner, slightly offset for fullness) */}
         {[...Array(8)].map((_, i) => (
          <div
            key={`inner-${i}`}
            className="absolute top-1/2 left-1/2 w-6 h-10 bg-coral-light/90 rounded-[50%] origin-bottom"
            style={{
              marginLeft: '-0.75rem',
              marginTop: '-2.5rem',
              transformOrigin: 'center bottom',
              transform: `rotate(${i * 45 + 22.5}deg) translateY(12px)`,
            }}
          />
        ))}

        {/* Center */}
        <div className="absolute w-10 h-10 bg-yellow-400 rounded-full shadow-lg z-10 flex items-center justify-center border-2 border-yellow-200">
             <div className="w-6 h-6 bg-yellow-500/20 rounded-full backdrop-blur-sm" />
        </div>
      </div>
      
      {/* Badge */}
      <span className="absolute -top-1 -right-1 bg-sage text-white text-xs font-bold px-2 py-1 rounded-full shadow-md z-20 animate-bounce">
        Sale
      </span>
    </button>
  );
};
