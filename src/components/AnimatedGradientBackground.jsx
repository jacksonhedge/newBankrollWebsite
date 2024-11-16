import React from 'react';

const AnimatedGradientBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div className="absolute inset-0 w-full h-full bg-[size:200%_200%] animate-gradient bg-gradient-to-br from-purple-900 via-blue-800 to-purple-800" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/70" />
    </div>
  );
};

export default AnimatedGradientBackground;