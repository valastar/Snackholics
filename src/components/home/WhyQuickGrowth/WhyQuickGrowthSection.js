import React, { useEffect, useRef } from 'react';
import './WhyQuickGrowth.scss';
import AOS from 'aos';

function WhyQuickGrowth() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    AOS.init();
  }, []);
  

  
  // Canvas animation using vanilla JS - copied from AnimatedHeroSection
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
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = '#FFD700';
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
      // First curve
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.1, canvas.height * 0.5);
      ctx.bezierCurveTo(
        canvas.width * 0.3, canvas.height * (0.3 + Math.sin(time * 0.001) * 0.1),
        canvas.width * 0.7, canvas.height * (0.6 + Math.cos(time * 0.001) * 0.1),
        canvas.width * 0.9, canvas.height * 0.3
      );
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Second curve
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.7);
      ctx.bezierCurveTo(
        canvas.width * 0.4, canvas.height * (0.2 + Math.cos(time * 0.0015) * 0.1),
        canvas.width * 0.6, canvas.height * (0.8 + Math.sin(time * 0.0015) * 0.1),
        canvas.width * 0.8, canvas.height * 0.4
      );
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };
    
    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background curves
      drawCurves(time);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Connect nearby particles with lines
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 0.5;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
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
    <div className="whyQuickGrowth relative overflow-hidden bg-[#0B0B0B]">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ opacity: 0.8 }}
      />
      
      {/* Animated circles */}
      <div className="absolute w-64 h-64 top-1/4 right-1/4 opacity-20 animate-float-slow">
        <div className="absolute w-full h-full border-4 border-yellow-500 rounded-full blur-md"></div>
      </div>
      
      <div className="absolute w-40 h-40 bottom-1/3 left-1/5 opacity-15 animate-float-medium">
        <div className="absolute w-full h-full border-4 border-yellow-500 rounded-full blur-sm"></div>
      </div>
      
      <div className="absolute w-20 h-20 top-1/3 left-1/3 opacity-10 animate-float-fast">
        <div className="absolute w-full h-full border-4 border-yellow-500 rounded-full blur-sm"></div>
      </div>
      
      {/* Content - your existing WhyQuickGrowth content */}
      <div className="container relative z-10">
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
          <h2>Why <span>Choose Us?</span></h2>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
            We Help You Succeed
          </p>
        </div>
        <div className="quickWrapper">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="block" data-aos="fade-right" data-aos-duration="1000">
                <img src="/images/home/why1.svg" alt="Expertise" />
                <div>
                  <h5>Expertise & Experience</h5>
                  <p>Proven track record of delivering innovative and reliable solutions.</p>
                </div>
              </div>
              <div className="block" data-aos="fade-right" data-aos-duration="1000">
                <img src="/images/home/why2.svg" alt="Client-Centric" />
                <div>
                  <h5>Client-Centric Approach</h5>
                  <p>We tailor our strategies to align with your business objectives.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2" data-aos="fade-up" data-aos-duration="1000">
              <img className='hands' src="/images/home/hands.svg" alt="hands" />
            </div>
            <div className="col-md-5">
              <div className="block" data-aos="fade-left" data-aos-duration="1000">
                <img src="/images/home/why3.svg" alt="End-to-End Services" />
                <div>
                  <h5>End-to-End Services</h5>
                  <p>From concept to execution, we cover all aspects of marketing and technology.</p>
                </div>
              </div>
              <div className="block" data-aos="fade-left" data-aos-duration="1000">
                <img src="/images/home/why4.svg" alt="Quality" />
                <div>
                  <h5>Commitment to Quality</h5>
                  <p>Achieving the perfect balance of quality and affordability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="300">
          <button className="cta-button">Get Started with QuickGrowth</button>
        </div>
      </div>
      
      {/* Animation styles */}
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
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default WhyQuickGrowth;