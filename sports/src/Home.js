import React from "react";
import { Footer } from "./Footer";
import Hero, { HeroSection } from "./Components/Hero";
import Nav from "./Nav";
import { Carousel } from "./Components/Carousel";
import { Coach } from "./Components/Coach";
import { Awards } from "./Components/Awards";
function Home() {
  return (
    <div>
      <Nav />
      {/* <CardC/> */}
      <HeroSection />
      <hr />

      <Coach />
      <hr />

      <Carousel />
      <hr />

      <Awards />

      <hr />
      <Footer />
    </div>
  );
}

export default Home;
