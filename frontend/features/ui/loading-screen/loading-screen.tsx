import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-white">
      <div className="relative rounded-full w-28 h-28 animate-spin bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 ">
        <div className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-white rounded-full top-1/2 left-1/2"></div>
      </div>
    </div>
  )
}

export default LoadingScreen;