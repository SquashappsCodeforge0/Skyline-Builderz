import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="procus-cursor"
        style={{
          position: 'fixed',
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '40px', 
          height: '40px',
         border:"3px solid rgba(255, 0, 0, 0.5)",
          borderRadius: '100%',
          transition: 'all 200ms ease-out',
          pointerEvents: 'none',
          zIndex: 1000,
        }}
      />
      <div
        className="procus-cursor2"
        style={{
          position: 'fixed',
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`, 
          width: '10px', 
          height: '10px',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',         
           borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1001,
          transform: 'translate(-50%, -50%)', 
        }}
      />
    </>
  );
};

export default CustomCursor;
