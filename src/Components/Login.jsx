import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 180 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse tracking
    const handleMouseMove = (event) => {
      mouseRef.current.x = event.x;
      mouseRef.current.y = event.y;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.8 + 0.5;  // Smaller, varied sizes
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 25) + 1;
        this.connections = [];
      }
      
      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';  // More transparent
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update() {
        // Mouse interaction
        const mouse = mouseRef.current;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to original position with gentle movement
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx/20;  // Slower return for smoother motion
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy/20;
          }
        }
      }
    }
    
    // Initialize particles
    const init = () => {
      particlesRef.current = [];
      const numberOfParticles = 400;
      
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particlesRef.current.push(new Particle(x, y));
      }
      
      // Create connections between particles
      for (let a = 0; a < particlesRef.current.length; a++) {
        particlesRef.current[a].connections = [];
        for (let b = a + 1; b < particlesRef.current.length; b++) {
          // Connect only if points are within a certain distance
          let dx = particlesRef.current[a].x - particlesRef.current[b].x;
          let dy = particlesRef.current[a].y - particlesRef.current[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200 && Math.random() < 0.05) {
            particlesRef.current[a].connections.push(b);
          }
        }
      }
    };
    
    // Connect particles with lines
    const connect = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = 0; j < particlesRef.current[i].connections.length; j++) {
          let connectedParticleIndex = particlesRef.current[i].connections[j];
          let p1 = particlesRef.current[i];
          let p2 = particlesRef.current[connectedParticleIndex];
          
          // Calculate distance for opacity
          let dx = p1.x - p2.x;
          let dy = p1.y - p2.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          // Thinner lines with distance-based opacity
          let opacity = Math.max(0, 0.15 - (distance / 2000));
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 0.5;  // Thinner lines
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update();
        particlesRef.current[i].draw();
      }
      connect();
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Add subtle floating effect
    const floatingInterval = setInterval(() => {
      particlesRef.current.forEach(particle => {
        // Add slight random movement
        particle.baseX += (Math.random() - 0.5) * 0.5;
        particle.baseY += (Math.random() - 0.5) * 0.5;
      });
    }, 2000);
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
      clearInterval(floatingInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login submitted');
  };

  return (
    <div className="bg-indigo-900 h-screen overflow-hidden relative">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ backgroundColor: '#0c1659' }}
      />
      
      <div className="flex items-center justify-center h-screen">
        <div 
          className="p-8 rounded-lg shadow-lg w-96 text-white z-10"
          style={{ 
            backdropFilter: 'blur(3px)',
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Chat Sndp</h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Enter your username" 
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="h-4 w-4 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-300 hover:underline">Forgot password?</a>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p>Don't have an account? <Link to='/registration' className="text-blue-300 hover:underline">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;