
import React, { useMemo } from 'react';

const FallingDecorations: React.FC = () => {
  const items = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 10}s`,
      size: `${15 + Math.random() * 25}px`,
      type: i % 3 === 0 ? '❤️' : i % 3 === 1 ? '🌹' : '💖',
      opacity: 0.3 + Math.random() * 0.5
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .falling-item {
          position: absolute;
          animation: fall linear infinite;
        }
      `}</style>
      {items.map((item) => (
        <div
          key={item.id}
          className="falling-item select-none"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
            opacity: item.opacity
          }}
        >
          {item.type}
        </div>
      ))}
    </div>
  );
};

export default FallingDecorations;
