import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StarfieldBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate stars with different properties
  const generateStars = () => {
    const stars = [];
    const starCount = 50; // Reduced stars for subtlety
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 3 + 0.5; // 0.5px to 3.5px
      const opacity = Math.random() * 0.8 + 0.2; // 0.2 to 1.0
      const twinkleSpeed = Math.random() * 3 + 1; // 1 to 4 seconds
      const delay = Math.random() * 5; // Random start delay
      
      // Different star colors
      const colors = [
        'text-white',
        'text-light-gray',
        'text-light-green',
        'text-sunset-orange',
        'text-light-purple',
        'text-dark-orange'
      ];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        opacity,
        twinkleSpeed,
        delay,
        color,
        // Some stars move slowly
        moveSpeed: Math.random() * 0.5 + 0.1,
        moveDirection: Math.random() * 360,
      });
    }
    
    return stars;
  };

  const stars = generateStars();

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main starfield */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute ${star.color} select-none`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size}px`,
            opacity: star.opacity,
          }}
          initial={{ 
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0.8, 1],
            opacity: [0, star.opacity, star.opacity * 0.5, star.opacity],
            x: [0, Math.cos(star.moveDirection) * star.moveSpeed],
            y: [0, Math.sin(star.moveDirection) * star.moveSpeed],
          }}
          transition={{
            duration: star.twinkleSpeed,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
      ))}
      
      {/* Additional twinkling dots */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.1,
          }}
          initial={{ 
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Shooting stars (occasional) */}
      {Array.from({ length: 1 }, (_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-2 h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            scaleX: 0,
            opacity: 0,
            rotate: Math.random() * 45 - 22.5, // Random angle
          }}
          animate={{
            scaleX: [0, 100, 0],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            delay: Math.random() * 10,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Constellation lines (subtle connecting lines) */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`constellation-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-light-gray/20 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
          initial={{ 
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground;
