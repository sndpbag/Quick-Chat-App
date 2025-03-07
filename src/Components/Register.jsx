// import React, { useEffect, useRef } from 'react';

// const Register = () => {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: null, y: null, radius: 180 });
//   const particlesRef = useRef([]);
//   const animationFrameRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
    
//     // Set canvas size
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
    
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
    
//     // Mouse tracking
//     const handleMouseMove = (event) => {
//       mouseRef.current.x = event.x;
//       mouseRef.current.y = event.y;
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
    
//     // Color palette for particles and connections
//     const colors = [
//       { r: 255, g: 99, b: 132 },   // Pink
//       { r: 54, g: 162, b: 235 },   // Blue
//       { r: 255, g: 206, b: 86 },   // Yellow
//       { r: 75, g: 192, b: 192 },   // Teal
//       { r: 153, g: 102, b: 255 },  // Purple
//       { r: 255, g: 159, b: 64 }    // Orange
//     ];
    
//     // Particle class
//     class Particle {
//       constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.size = Math.random() * 2 + 0.5;
//         this.baseX = this.x;
//         this.baseY = this.y;
//         this.density = (Math.random() * 25) + 1;
//         this.connections = [];
//         this.color = colors[Math.floor(Math.random() * colors.length)];
//         this.angle = Math.random() * Math.PI * 2;
//         this.speed = 0.05 + Math.random() * 0.05;
//       }
      
//       draw() {
//         ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.7)`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//       }
      
//       update() {
//         // Mouse interaction
//         const mouse = mouseRef.current;
//         let dx = mouse.x - this.x;
//         let dy = mouse.y - this.y;
//         let distance = Math.sqrt(dx * dx + dy * dy);
        
//         if (distance < mouse.radius) {
//           let forceDirectionX = dx / distance;
//           let forceDirectionY = dy / distance;
//           let maxDistance = mouse.radius;
//           let force = (maxDistance - distance) / maxDistance;
//           let directionX = forceDirectionX * force * this.density;
//           let directionY = forceDirectionY * force * this.density;
          
//           this.x -= directionX;
//           this.y -= directionY;
//         } else {
//           // Return to original position with gentle movement
//           if (this.x !== this.baseX) {
//             let dx = this.x - this.baseX;
//             this.x -= dx/20;
//           }
//           if (this.y !== this.baseY) {
//             let dy = this.y - this.baseY;
//             this.y -= dy/20;
//           }
//         }
        
//         // Add gentle floating motion
//         this.angle += this.speed;
//         this.baseX += Math.sin(this.angle) * 0.3;
//         this.baseY += Math.cos(this.angle) * 0.3;
//       }
//     }
    
//     // Initialize particles
//     const init = () => {
//       particlesRef.current = [];
//       const numberOfParticles = 200; // More particles for richer effect
      
//       for (let i = 0; i < numberOfParticles; i++) {
//         let x = Math.random() * canvas.width;
//         let y = Math.random() * canvas.height;
//         particlesRef.current.push(new Particle(x, y));
//       }
      
//       // Create connections between particles
//       for (let a = 0; a < particlesRef.current.length; a++) {
//         particlesRef.current[a].connections = [];
//         for (let b = a + 1; b < particlesRef.current.length; b++) {
//           let dx = particlesRef.current[a].x - particlesRef.current[b].x;
//           let dy = particlesRef.current[a].y - particlesRef.current[b].y;
//           let distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 150 && Math.random() < 0.05) {
//             particlesRef.current[a].connections.push(b);
//           }
//         }
//       }
//     };
    
//     // Connect particles with colorful lines
//     const connect = () => {
//       for (let i = 0; i < particlesRef.current.length; i++) {
//         for (let j = 0; j < particlesRef.current[i].connections.length; j++) {
//           let connectedParticleIndex = particlesRef.current[i].connections[j];
//           let p1 = particlesRef.current[i];
//           let p2 = particlesRef.current[connectedParticleIndex];
          
//           // Calculate distance for opacity
//           let dx = p1.x - p2.x;
//           let dy = p1.y - p2.y;
//           let distance = Math.sqrt(dx * dx + dy * dy);
          
//           // Create gradient for the line
//           const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//           gradient.addColorStop(0, `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, 0.5)`);
//           gradient.addColorStop(1, `rgba(${p2.color.r}, ${p2.color.g}, ${p2.color.b}, 0.5)`);
          
//           ctx.strokeStyle = gradient;
//           ctx.lineWidth = 0.8;
//           ctx.beginPath();
//           ctx.moveTo(p1.x, p1.y);
//           ctx.lineTo(p2.x, p2.y);
//           ctx.stroke();
//         }
//       }
//     };
    
//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Create a gradient background
//       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//       gradient.addColorStop(0, '#1a0f40');
//       gradient.addColorStop(1, '#3d1e7b');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       for (let i = 0; i < particlesRef.current.length; i++) {
//         particlesRef.current[i].update();
//         particlesRef.current[i].draw();
//       }
//       connect();
      
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };
    
//     init();
//     animate();
    
//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(animationFrameRef.current);
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Registration submitted');
//   };

//   return (
//     <div className="h-screen overflow-hidden relative">
//       <canvas 
//         ref={canvasRef} 
//         className="absolute top-0 left-0 w-full h-full z-0"
//       />
      
//       <div className="flex items-center justify-center h-screen">
//         <div 
//           className="p-10 rounded-xl shadow-2xl w-96 text-white z-10 relative"
//           style={{ 
//             backdropFilter: 'blur(8px)',
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             border: '1px solid rgba(255, 255, 255, 0.2)',
//             boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
//           }}
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent" 
//               style={{
//                 backgroundImage: 'linear-gradient(45deg, #ff6b6b, #9777fa, #6bb5ff)',
//                 textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
//               }}>
//             Create Account
//           </h2>
          
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium mb-2" htmlFor="fullname">Full Name</label>
//               <input 
//                 type="text" 
//                 id="fullname" 
//                 placeholder="Enter your full name" 
//                 className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//                 style={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.08)',
//                   color: 'white',
//                   border: '1px solid rgba(255, 255, 255, 0.2)'
//                 }}
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 placeholder="Enter your email" 
//                 className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//                 style={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.08)',
//                   color: 'white',
//                   border: '1px solid rgba(255, 255, 255, 0.2)'
//                 }}
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
//               <input 
//                 type="text" 
//                 id="username" 
//                 placeholder="Choose a username" 
//                 className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//                 style={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.08)',
//                   color: 'white',
//                   border: '1px solid rgba(255, 255, 255, 0.2)'
//                 }}
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
//               <input 
//                 type="password" 
//                 id="password" 
//                 placeholder="Create a password" 
//                 className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//                 style={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.08)',
//                   color: 'white',
//                   border: '1px solid rgba(255, 255, 255, 0.2)'
//                 }}
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">Confirm Password</label>
//               <input 
//                 type="password" 
//                 id="confirmPassword" 
//                 placeholder="Confirm your password" 
//                 className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
//                 style={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.08)',
//                   color: 'white',
//                   border: '1px solid rgba(255, 255, 255, 0.2)'
//                 }}
//               />
//             </div>
            
//             <div className="flex items-center">
//               <input 
//                 type="checkbox" 
//                 id="terms" 
//                 className="h-4 w-4 rounded"
//               />
//               <label htmlFor="terms" className="ml-2 text-sm">I agree to the <a href="#" className="text-purple-300 hover:underline">Terms & Conditions</a></label>
//             </div>
            
//             <button 
//               type="submit" 
//               className="w-full py-3 px-4 rounded-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300"
//               style={{
//                 background: 'linear-gradient(45deg, #7928CA, #FF0080)',
//                 boxShadow: '0 4px 15px rgba(255, 0, 128, 0.3)'
//               }}
//             >
//               Register
//             </button>
//           </form>
          
//           <div className="mt-6 text-center text-sm">
//             <p>Already have an account? <a href="#" className="text-purple-300 hover:underline">Sign In</a></p>
//           </div>
          
//           <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-40"></div>
//           <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-300 rounded-full blur-xl opacity-40"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 100 });
  const starsRef = useRef([]);
  const planetsRef = useRef([]);
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
    
    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.1;
        this.speed = Math.random() * 0.05;
        this.brightness = Math.random();
        this.alpha = Math.random() * 0.8 + 0.2;
        this.blinkSpeed = Math.random() * 0.05;
        this.blinkDirection = Math.random() > 0.5 ? 1 : -1;
      }
      
      update() {
        // Twinkle effect
        this.alpha += this.blinkSpeed * this.blinkDirection;
        
        if (this.alpha <= 0.2 || this.alpha >= 1) {
          this.blinkDirection *= -1;
        }
        
        // Slight movement
        this.x += Math.sin(Date.now() * 0.001) * this.speed;
        this.y += Math.cos(Date.now() * 0.002) * this.speed;
        
        // Reset if off screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, this.size * 2
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.alpha})`);
        gradient.addColorStop(0.1, `rgba(255, 255, 255, ${this.alpha * 0.8})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Core of the star
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Planet class
    class Planet {
      constructor(orbitRadius, size, speed, color, hasRing = false, ringColor = null, moons = []) {
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;
        this.orbitRadius = orbitRadius;
        this.size = size;
        this.baseSize = size;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = speed;
        this.color = color;
        this.x = this.centerX + Math.cos(this.angle) * this.orbitRadius;
        this.y = this.centerY + Math.sin(this.angle) * this.orbitRadius;
        this.hasRing = hasRing;
        this.ringColor = ringColor || color;
        this.moons = moons;
        this.pulseDirection = 1;
        this.pulseSpeed = 0.001;
        this.pulseAmount = 0.1;
        this.initialX = this.x;
        this.initialY = this.y;
      }
      
      update() {
        const mouse = mouseRef.current;
        
        // Normal orbit
        this.angle += this.speed;
        this.x = this.centerX + Math.cos(this.angle) * this.orbitRadius;
        this.y = this.centerY + Math.sin(this.angle) * this.orbitRadius;
        
        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius + this.size) {
            // Move away from mouse
            const pushFactor = (mouse.radius - distance) / mouse.radius;
            this.x -= dx * pushFactor * 0.1;
            this.y -= dy * pushFactor * 0.1;
          }
        }
        
        // Subtle pulsing effect
        this.size += this.pulseDirection * this.pulseSpeed * this.baseSize;
        if (this.size > this.baseSize * (1 + this.pulseAmount) || 
            this.size < this.baseSize * (1 - this.pulseAmount)) {
          this.pulseDirection *= -1;
        }
        
        // Update moons
        this.moons.forEach(moon => {
          moon.parentX = this.x;
          moon.parentY = this.y;
          moon.update();
        });
      }
      
      draw() {
        // Draw orbit path (faintly)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.orbitRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw planet
        if (this.hasRing) {
          // Draw ring
          ctx.strokeStyle = this.ringColor;
          ctx.lineWidth = this.size * 0.2;
          ctx.beginPath();
          ctx.ellipse(
            this.x, this.y, 
            this.size * 1.8, this.size * 0.5, 
            this.angle + Math.PI / 4, 0, Math.PI * 2
          );
          ctx.stroke();
        }
        
        // Create gradient for planet
        const gradient = ctx.createRadialGradient(
          this.x - this.size * 0.3, this.y - this.size * 0.3, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, this.color.highlight || "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(0.6, this.color.mid || this.color.main);
        gradient.addColorStop(1, this.color.shadow || "rgba(0, 0, 0, 0.5)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw moons
        this.moons.forEach(moon => moon.draw());
      }
    }
    
    // Moon class
    class Moon {
      constructor(parentX, parentY, orbitRadius, size, speed, color) {
        this.parentX = parentX;
        this.parentY = parentY;
        this.orbitRadius = orbitRadius;
        this.size = size;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = speed;
        this.color = color;
      }
      
      update() {
        this.angle += this.speed;
      }
      
      draw() {
        const x = this.parentX + Math.cos(this.angle) * this.orbitRadius;
        const y = this.parentY + Math.sin(this.angle) * this.orbitRadius;
        
        // Draw moon
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      const numberOfStars = 300;
      
      for (let i = 0; i < numberOfStars; i++) {
        starsRef.current.push(new Star());
      }
    };
    
    // Initialize planets
    const initPlanets = () => {
      planetsRef.current = [];
      
      // Sun - center
      const sun = new Planet(
        0, 40, 0.0001, 
        { main: "#FFA500", highlight: "#FFFFFF", mid: "#FFA500", shadow: "#FF4500" }
      );
      
      // Mercury
      const mercury = new Planet(
        100, 5, 0.005, 
        { main: "#A9A9A9", highlight: "#D3D3D3", shadow: "#696969" }
      );
      
      // Venus
      const venus = new Planet(
        150, 8, 0.004, 
        { main: "#DEB887", highlight: "#F5DEB3", shadow: "#8B4513" }
      );
      
      // Earth with moon
      const earthMoon = new Moon(0, 0, 15, 2, 0.02, "rgba(220, 220, 220, 0.8)");
      const earth = new Planet(
        200, 10, 0.003, 
        { main: "#4169E1", highlight: "#87CEEB", shadow: "#00008B" },
        false, null, [earthMoon]
      );
      
      // Mars with moons
      const marsMoon1 = new Moon(0, 0, 12, 1, 0.02, "rgba(200, 200, 200, 0.7)");
      const marsMoon2 = new Moon(0, 0, 16, 1, 0.015, "rgba(180, 180, 180, 0.7)");
      const mars = new Planet(
        250, 7, 0.0025, 
        { main: "#B22222", highlight: "#CD5C5C", shadow: "#800000" },
        false, null, [marsMoon1, marsMoon2]
      );
      
      // Jupiter with rings
      const jupiter = new Planet(
        320, 20, 0.002, 
        { main: "#DEB887", highlight: "#F5DEB3", shadow: "#8B4513" },
        true, "rgba(210, 180, 140, 0.4)"
      );
      
      // Saturn with prominent rings
      const saturn = new Planet(
        400, 18, 0.0015, 
        { main: "#F0E68C", highlight: "#FFFACD", shadow: "#BDB76B" },
        true, "rgba(244, 164, 96, 0.7)"
      );
      
      // Uranus
      const uranus = new Planet(
        460, 14, 0.001, 
        { main: "#ADD8E6", highlight: "#E0FFFF", shadow: "#5F9EA0" },
        true, "rgba(173, 216, 230, 0.3)"
      );
      
      // Neptune
      const neptune = new Planet(
        520, 14, 0.0008, 
        { main: "#4169E1", highlight: "#1E90FF", shadow: "#00008B" }
      );
      
      planetsRef.current.push(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
    };
    
    // Animation loop
    const animate = () => {
      // Create space background with gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, "#0a0220");
      bgGradient.addColorStop(0.5, "#170b44");
      bgGradient.addColorStop(1, "#0c0423");
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some nebula-like effects
      const nebulaColors = [
        "rgba(76, 0, 153, 0.05)",
        "rgba(153, 0, 153, 0.03)",
        "rgba(0, 51, 102, 0.04)",
        "rgba(0, 102, 153, 0.03)",
        "rgba(127, 0, 255, 0.02)"
      ];
      
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 200 + 100;
        
        const nebulaGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        nebulaGradient.addColorStop(0, nebulaColors[i]);
        nebulaGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = nebulaGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Update and draw stars
      starsRef.current.forEach(star => {
        star.update();
        star.draw();
      });
      
      // Update and draw planets
      planetsRef.current.forEach(planet => {
        planet.update();
        planet.draw();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    initStars();
    initPlanets();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted');
  };

  return (
    <div className="h-screen overflow-hidden relative">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      <div className="flex items-center justify-center h-screen">
        <div 
          className="p-10 rounded-xl shadow-2xl w-96 text-white z-10 relative"
          style={{ 
            backdropFilter: 'blur(1px)',
            backgroundColor: 'rgba(13, 6, 35, 0.65)',
            border: '1px solid rgba(138, 43, 226, 0.3)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(138, 43, 226, 0.3)'
          }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent" 
              style={{
                backgroundImage: 'linear-gradient(45deg, #e2b0ff, #9F2BC1, #6bb5ff)',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.5)'
              }}>
            Create Account
          </h2>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="fullname">Full Name</label>
              <input 
                type="text" 
                id="fullname" 
                placeholder="Enter your full name" 
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                style={{
                  backgroundColor: 'rgba(30, 14, 63, 0.5)',
                  color: 'white',
                  border: '1px solid rgba(138, 43, 226, 0.3)'
                }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                style={{
                  backgroundColor: 'rgba(30, 14, 63, 0.5)',
                  color: 'white',
                  border: '1px solid rgba(138, 43, 226, 0.3)'
                }}
              />
            </div>
            
            {/* <div>
              <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Choose a username" 
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                style={{
                  backgroundColor: 'rgba(30, 14, 63, 0.5)',
                  color: 'white',
                  border: '1px solid rgba(138, 43, 226, 0.3)'
                }}
              />
            </div> */}
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Create a password" 
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                style={{
                  backgroundColor: 'rgba(30, 14, 63, 0.5)',
                  color: 'white',
                  border: '1px solid rgba(138, 43, 226, 0.3)'
                }}
              />
            </div>
            
            {/* <div>
              <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirm your password" 
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                style={{
                  backgroundColor: 'rgba(30, 14, 63, 0.5)',
                  color: 'white',
                  border: '1px solid rgba(138, 43, 226, 0.3)'
                }}
              />
            </div> */}
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms" 
                className="h-4 w-4 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm">I agree to the <a href="#" className="text-indigo-300 hover:underline">Terms & Conditions</a></label>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 px-4 rounded-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300"
              style={{
                background: 'linear-gradient(45deg, #9F2BC1, #4C00FF)',
                boxShadow: '0 4px 15px rgba(76, 0, 255, 0.4)'
              }}
            >
              Register
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p>Already have an account? <Link to='/' className="text-indigo-300 hover:underline">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;