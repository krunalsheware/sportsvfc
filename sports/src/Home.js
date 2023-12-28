import React from 'react';
import { Footer } from './Footer';
import Hero, { HeroSection } from './Components/Hero';
import Nav from './Nav';
import { Carousel } from './Components/Carousel';
import { Coach } from './Components/Coach';
function Home() {
  return (
    <div>
        <Nav/>
{/* <CardC/> */}
<HeroSection/>      
<Coach/>
      <Carousel/>
<Footer/>
    </div>
  );
}

export default Home;