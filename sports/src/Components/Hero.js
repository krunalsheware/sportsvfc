import React from "react";

const HeroSection = () => {

  const backgroundImage={
    URL:"https://images.pexels.com/photos/6832204/pexels-photo-6832204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(https://images.pexels.com/photos/6832204/pexels-photo-6832204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">Welcome to VFC</h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">Victorious Fencing Club</p>
       
      </div>
    </div>
  );
};

export{HeroSection}
