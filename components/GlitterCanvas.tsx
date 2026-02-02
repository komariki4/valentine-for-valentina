
import React, { useRef, useEffect } from 'react';

const GlitterCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const sparkles: Sparkle[] = [];
    const sparkleCount = 100;

    class Sparkle {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random();
        this.speed = Math.random() * 0.02 + 0.005;
        this.life = Math.random();
      }

      update() {
        this.life += this.speed;
        this.opacity = Math.sin(this.life * Math.PI);
        if (this.life >= 1) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.life = 0;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 246, 186, ${this.opacity})`;
        ctx.fill();
        
        // Star cross effect
        if (this.size > 2) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(this.x - this.size * 2, this.y);
          ctx.lineTo(this.x + this.size * 2, this.y);
          ctx.moveTo(this.x, this.y - this.size * 2);
          ctx.lineTo(this.x, this.y + this.size * 2);
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < sparkleCount; i++) {
      sparkles.push(new Sparkle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      sparkles.forEach((s) => {
        s.update();
        s.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

export default GlitterCanvas;
