import React from "react";
import Nav from "../Nav";
import { Footer } from "../Footer";
import { Example } from "./People";
import { Awards } from "./Awards";

const Achivments = () => {
  return (
    <div>
      <Nav />

      <div>
        <h1 className="text-3xl font-bold mt-20 mb-8 py-8 text-center">
          OUR ACHIVMENTS
        </h1>
      </div>

      <Example />

      <Awards/>
      <Footer />
    </div>
  );
};
export { Achivments };
