import React from 'react';
import { useEffect, useRef } from 'react';

const AnimatedHeroSection = () => {
  const canvasRef = useRef(null);
  
  // Canvas animation using vanilla JS
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Colors for the theme
    const colors = {
      yellow: '#FFD700',      // Bright yellow
      lightBlue: '#87CEEB',   // Light sky blue
      accentBlue: '#1E90FF',  // Slightly darker blue for contrast
    };
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        // Randomly assign yellow or light blue color to particles
        this.color = Math.random() > 0.5 ? colors.yellow : colors.lightBlue;
        this.alpha = Math.random() * 0.6 + 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }
    
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    // Draw curved lines
    const drawCurves = (time) => {
      // First curve - yellow
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.1, canvas.height * 0.5);
      ctx.bezierCurveTo(
        canvas.width * 0.3, canvas.height * (0.3 + Math.sin(time * 0.001) * 0.1),
        canvas.width * 0.7, canvas.height * (0.6 + Math.cos(time * 0.001) * 0.1),
        canvas.width * 0.9, canvas.height * 0.3
      );
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)'; // Yellow with transparency
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Second curve - light blue
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.7);
      ctx.bezierCurveTo(
        canvas.width * 0.4, canvas.height * (0.2 + Math.cos(time * 0.0015) * 0.1),
        canvas.width * 0.6, canvas.height * (0.8 + Math.sin(time * 0.0015) * 0.1),
        canvas.width * 0.8, canvas.height * 0.4
      );
      ctx.strokeStyle = 'rgba(135, 206, 235, 0.3)'; // Light blue with transparency
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Third curve - darker blue
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.05, canvas.height * 0.3);
      ctx.bezierCurveTo(
        canvas.width * 0.25, canvas.height * (0.5 + Math.sin(time * 0.002) * 0.1),
        canvas.width * 0.55, canvas.height * (0.4 + Math.cos(time * 0.002) * 0.1),
        canvas.width * 0.95, canvas.height * 0.6
      );
      ctx.strokeStyle = 'rgba(30, 144, 255, 0.2)'; // Darker blue with transparency
      ctx.lineWidth = 1;
      ctx.stroke();
    };
    
    // Draw background gradient
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1a3a5f'); // Dark blue shade
      gradient.addColorStop(1, '#0f172a'); // Very dark blue/navy
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle pattern
      for (let i = 0; i < canvas.width; i += 20) {
        for (let j = 0; j < canvas.height; j += 20) {
          if (Math.random() > 0.992) {
            ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 215, 0, 0.03)' : 'rgba(135, 206, 235, 0.03)';
            ctx.fillRect(i, j, 4, 4);
          }
        }
      }
    };
    
    // Animation loop
    const animate = (time) => {
      // Draw background gradient instead of clearing
      drawBackground();
      
      // Draw background curves
      drawCurves(time);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Connect nearby particles with lines
      ctx.globalAlpha = 0.1;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            // Use the color of the connected particles
            if (particles[a].color === colors.yellow && particles[b].color === colors.yellow) {
              ctx.strokeStyle = colors.yellow;
            } else if (particles[a].color === colors.lightBlue && particles[b].color === colors.lightBlue) {
              ctx.strokeStyle = colors.lightBlue;
            } else {
              // Mix colors for connections between different colored particles
              ctx.strokeStyle = colors.accentBlue;
            }
            
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    initParticles();
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="relative overflow-hidden pt-32 md:pt-40 lg:pt-52"
      style={{ 
        minHeight: '90vh'
      }}
    >
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ opacity: 0.85 }}
      />
      
      {/* Animated circles */}
      <div className="absolute w-64 h-64 top-1/4 right-1/4 opacity-20 animate-float-slow">
        <div className="absolute w-full h-full border-4 border-yellow-400 rounded-full blur-md"></div>
      </div>
      
      <div className="absolute w-40 h-40 bottom-1/3 left-1/5 opacity-15 animate-float-medium">
        <div className="absolute w-full h-full border-4 border-blue-300 rounded-full blur-sm"></div>
      </div>
      
      <div className="absolute w-20 h-20 top-1/3 left-1/3 opacity-10 animate-float-fast">
        <div className="absolute w-full h-full border-4 border-yellow-300 rounded-full blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start max-w-5xl">
          {/* Subtitle - with animation */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-yellow-400 font-medium tracking-wider text-sm md:text-base uppercase">
            Bienvenidos a Snackholics 
            </span>
          </div>

          {/* Main Heading - with animation */}
          <div className="mt-4 md:mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="block animate-slide-up" style={{ animationDelay: '0.4s' }}>Empoderando a los jóvenes con snacks creativos,</span>
              <span className="block animate-slide-up" style={{ animationDelay: '0.5s' }}>experiencias únicas</span>
              <span className="block animate-slide-up" style={{ animationDelay: '0.6s' }}>
              y buen ambiente
                <span className="relative inline-block px-4">
                </span>
              </span>
            </h1>
          </div>

          {/* Description text - with animation */}
          <div className="mt-6 md:mt-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-blue-100 text-base md:text-lg">
            En Snackholics reinventamos la hora del snack. Creamos un espacio divertido, seguro y lleno de sabor donde los estudiantes pueden relajarse, socializar y disfrutar de opciones deliciosas a precios accesibles.
            </p>
          </div>


          {/* CTA Buttons - with animation */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-4 md:gap-6">
            <button 
              className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: '1.1s' }}
              onClick={() => window.location.href = '/contact-us'}
            >
              CONTÁCTANOS
            </button>

            <button 
              className="px-8 py-4 bg-transparent hover:bg-blue-400/30 text-white border border-blue-300/50 hover:border-blue-300 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" 
              style={{ animationDelay: '1.3s' }}
            >
              A COMER EN EL PUF 
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -10px); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeroSection;