import React, { useEffect, useRef } from 'react'
import './ContactBanner.scss'
import { Link } from 'react-router-dom'

function ContactBanner() {
    const canvasRef = useRef(null);
    
    // Canvas animation for the contactInfo section background
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;
        
        // Set canvas dimensiosn
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = Math.max(
                document.querySelector('.contactInfo').offsetHeight + 200,
                window.innerHeight / 2
            );
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
                this.color = '#DCA629'; // Gold color to match your theme
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
            const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
            
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
            ctx.strokeStyle = 'rgba(220, 166, 41, 0.3)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            
            // Second curve
            ctx.beginPath();
            ctx.moveTo(canvas.width * 0.2, canvas.height * 0.7);
            ctx.bezierCurveTo(
                canvas.width * 0.4, canvas.height * (0.2 + Math.cos(time * 0.0015) * 0.1),
                canvas.width * 0.6, canvas.height * (0.8 + Math.sin(time * 0.0015) * 0.1),
                canvas.width * 0.8, canvas.height * 0.4
            );
            ctx.strokeStyle = 'rgba(220, 166, 41, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
        };
        
        // Animation loop
        const animate = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background with a dark gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#161616');
            gradient.addColorStop(1, '#222222');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw background curves
            drawCurves(time);
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Connect nearby particles with lines
            ctx.globalAlpha = 0.08;
            ctx.strokeStyle = '#DCA629';
            ctx.lineWidth = 0.3;
            
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 90) {
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
        <React.Fragment>
            <div className="contactBanner">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Contactanos</h2>
                            <p>Contactanos para pedir nuestros serivicios!</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Animated background canvas positioned absolutely */}
            <div style={{ 
                position: 'absolute', 
                left: 0, 
                right: 0, 
                zIndex: -1,
                top: 'calc(550px - 100px)', // Matches your contactBanner height - margin-top of contactInfo
                overflow: 'hidden',
                height: '100%'
            }}>
                <canvas 
                    ref={canvasRef} 
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                    }}
                />
                
                {/* Animated circles */}
                <div style={{ 
                    position: 'absolute',
                    width: '240px', 
                    height: '240px', 
                    top: '25%',
                    right: '25%',
                    opacity: 0.15,
                    animation: 'float-slow 6s ease-in-out infinite',
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '4px solid #DCA629',
                        filter: 'blur(8px)'
                    }}></div>
                </div>
                
                <div style={{ 
                    position: 'absolute',
                    width: '160px', 
                    height: '160px', 
                    bottom: '33%',
                    left: '20%',
                    opacity: 0.12,
                    animation: 'float-medium 4s ease-in-out infinite',
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '4px solid #DCA629',
                        filter: 'blur(4px)'
                    }}></div>
                </div>
                
                <div style={{ 
                    position: 'absolute',
                    width: '80px', 
                    height: '80px', 
                    top: '33%',
                    left: '33%',
                    opacity: 0.1,
                    animation: 'float-fast 3s ease-in-out infinite',
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '4px solid #DCA629',
                        filter: 'blur(3px)'
                    }}></div>
                </div>
            </div>
            
            {/* Original content - unchanged */}
            <div className="contactInfo">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="info">
                                {/* <img src="/images/contact/location.svg" alt="location" /> */}
                                <h3>Hermosillo Sonora</h3>
                                <p className='title'>Calle 12 De Octubre & Sonora 100, <br />
                                San Benito, Hermosillo,</p>
                                <div className="block">
                                    <p>Abierto a las:</p>
                                    <span>12:00pm – 7:00pm (Lunes a Sabado)</span>
                                </div>
                                <a href="tel:6622050077">Phone: <span>6622050077</span></a> <p> </p>
                                <a href="mailto:servicioalcliente@snackholics.com ">Email: <span>servicioalcliente@snackholics.com </span></a>
                            </div>
                        </div>
                        {/* <div className="col-lg-5 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="info">
                                <img src="/images/contact/emergency.svg" alt="emergency" />
                                <h3>24 / 7 Emergency Support</h3>
                                <p className='subTitle'>Support Desk</p>
                                <p className='title'>Need technical assistance?
                                Our Support Desk is available 24 / 7.</p>
                                <div className="block">
                                    <span>
                                    Log all service requests through Support Desk. Maximum response time is 3 hours.
                                    </span>
                                </div>
                                <Link to="/" className="btn-custom">Support</Link>
                            </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
            
            {/* Animation keyframes */}
            <style>
            {`
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
            `}
            </style>
        </React.Fragment>
    )
}

export default ContactBanner