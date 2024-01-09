import React from "react";
import { Footer } from "./Footer";
import Hero, { HeroSection } from "./Components/Hero";
import Nav from "./Nav";
import { Carousel } from "./Components/Carousel";
import { Coach } from "./Components/Coach";
function Home() {
  return (
    <div className=" m-auto">
      <Nav />
      <HeroSection />
      <hr />
      <Coach />
      <hr />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
