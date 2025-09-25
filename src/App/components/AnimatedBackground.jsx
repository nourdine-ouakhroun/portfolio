import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import StarfieldBackground from './StarfieldBackground.jsx';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Various coding snippets and elements
  const codeElements = [
    // JavaScript/React snippets
    { text: 'const', type: 'keyword', color: 'text-purple' },
    { text: 'function', type: 'keyword', color: 'text-purple' },
    { text: 'useState', type: 'function', color: 'text-light-green' },
    { text: 'useEffect', type: 'function', color: 'text-light-green' },
    { text: 'return', type: 'keyword', color: 'text-purple' },
    { text: 'import', type: 'keyword', color: 'text-purple' },
    { text: 'export', type: 'keyword', color: 'text-purple' },
    { text: 'className', type: 'property', color: 'text-dark-orange' },
    { text: 'onClick', type: 'property', color: 'text-dark-orange' },
    { text: 'props', type: 'variable', color: 'text-light-gray' },
    { text: 'state', type: 'variable', color: 'text-light-gray' },
    
    // HTML/CSS elements
    { text: '<div>', type: 'tag', color: 'text-light-green' },
    { text: '</div>', type: 'tag', color: 'text-light-green' },
    { text: '<span>', type: 'tag', color: 'text-light-green' },
    { text: '</span>', type: 'tag', color: 'text-light-green' },
    { text: 'className', type: 'attribute', color: 'text-dark-orange' },
    { text: 'id', type: 'attribute', color: 'text-dark-orange' },
    
    // Symbols and operators
    { text: '{}', type: 'symbol', color: 'text-white' },
    { text: '()', type: 'symbol', color: 'text-white' },
    { text: '[]', type: 'symbol', color: 'text-white' },
    { text: '=>', type: 'operator', color: 'text-sunset-orange' },
    { text: '&&', type: 'operator', color: 'text-sunset-orange' },
    { text: '||', type: 'operator', color: 'text-sunset-orange' },
    { text: '===', type: 'operator', color: 'text-sunset-orange' },
    { text: '!==', type: 'operator', color: 'text-sunset-orange' },
    
    // Comments and strings
    { text: '//', type: 'comment', color: 'text-light-gray/60' },
    { text: '/*', type: 'comment', color: 'text-light-gray/60' },
    { text: '*/', type: 'comment', color: 'text-light-gray/60' },
    { text: '"', type: 'string', color: 'text-dark-orange' },
    { text: "'", type: 'string', color: 'text-dark-orange' },
    { text: '`', type: 'string', color: 'text-dark-orange' },
    
    // Numbers and booleans
    { text: '0', type: 'number', color: 'text-light-green' },
    { text: '1', type: 'number', color: 'text-light-green' },
    { text: 'true', type: 'boolean', color: 'text-light-green' },
    { text: 'false', type: 'boolean', color: 'text-light-green' },
    { text: 'null', type: 'keyword', color: 'text-purple' },
    { text: 'undefined', type: 'keyword', color: 'text-purple' },
  ];

  // Generate random positions and animations
  const generateElement = (index) => {
    const element = codeElements[index % codeElements.length];
    const delay = Math.random() * 5;
    const duration = 15 + Math.random() * 10; // 15-25 seconds
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    return {
      ...element,
      id: index,
      delay,
      duration,
      startX,
      startY,
      opacity: 0.1 + Math.random() * 0.3, // Very subtle opacity
      scale: 0.8 + Math.random() * 0.4,
    };
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <StarfieldBackground />
      {Array.from({ length: 12 }, (_, i) => generateElement(i)).map((element) => (
        <motion.div
          key={element.id}
          className={`absolute text-xs font-mono ${element.color} select-none`}
          style={{
            left: `${element.startX}%`,
            top: `${element.startY}%`,
            opacity: element.opacity,
            fontSize: `${8 + Math.random() * 4}px`,
          }}
          initial={{ 
            x: 0, 
            y: 0,
            rotate: 0,
            scale: element.scale,
          }}
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
            rotate: [0, 5, -3, 2, 0],
            scale: [element.scale, element.scale * 1.1, element.scale * 0.9, element.scale],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.text}
        </motion.div>
      ))}
      
      {/* Floating brackets and parentheses */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`bracket-${i}`}
          className="absolute text-white/20 font-mono select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${20 + Math.random() * 15}px`,
          }}
          initial={{ 
            rotate: 0,
            scale: 0.5,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.5, 0.8, 0.5],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {['{', '}', '(', ')', '[', ']', '<', '>'][i % 8]}
        </motion.div>
      ))}
      
      {/* Floating dots (like cursor or selection) */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-light-green/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating lines (like code lines) */}
      {Array.from({ length: 2 }, (_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-light-gray/20 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${50 + Math.random() * 100}px`,
          }}
          initial={{ 
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.4, 0],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
