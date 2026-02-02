
import React from 'react';

interface CupidProps {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay: number;
  mirrored?: boolean;
}

const Cupid: React.FC<CupidProps> = ({ position, delay, mirrored }) => {
  return (
    <div 
      className="absolute z-20 animate-floating" 
      style={{ 
        ...position, 
        animationDelay: `${delay}s`,
        transform: mirrored ? 'scaleX(-1)' : 'none'
      }}
    >
      <svg 
        width="100" 
        height="100" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Simple Winged Cupid Silhouette */}
        {/* Left Wing */}
        <path d="M40 40C20 30 10 50 30 60C20 80 50 70 45 50" fill="#FFE5EC" />
        {/* Right Wing */}
        <path d="M60 40C80 30 90 50 70 60C80 80 50 70 55 50" fill="#FFE5EC" />
        {/* Body (Baby figure) */}
        <circle cx="50" cy="45" r="12" fill="#FFC8DD" /> {/* Head */}
        <path d="M40 55C40 55 35 85 50 85C65 85 60 55 60 55" fill="#FFC8DD" /> {/* Body */}
        {/* Bow */}
        <path d="M70 45C75 45 85 55 70 65" stroke="#BF953F" strokeWidth="2" strokeLinecap="round" />
        <line x1="72" y1="46" x2="72" y2="64" stroke="#BF953F" strokeWidth="1" />
        {/* Arrow */}
        <line x1="65" y1="55" x2="85" y2="55" stroke="#C9184A" strokeWidth="2" />
        <path d="M85 55L80 52V58L85 55Z" fill="#C9184A" />
        {/* Halo */}
        <ellipse cx="50" cy="30" rx="10" ry="3" stroke="#FEE440" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Cupid;
