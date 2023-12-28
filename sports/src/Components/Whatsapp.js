import React from "react";
import "./whatsapp.css";

const Whatsapp = () => {
  const whatsapp = {
    position: "fixed",
    bottom: "20px",
    right: "40px",
  };
  const imageStyle = {
    width: "60px", // Set the desired width
    height: "60px", // Set the desired height
  };
  return (
    <div style={whatsapp}>
      <a href="https://wa.me/918657483135?text=Hello, I wanted to know more about Victorious Fecning Club training center?">
        <img
          src="../whatsapp.png"
          alt="whatsappicon"
          style={imageStyle} // Apply the style to the image
        />
      </a>
    </div>
  );
};
export { Whatsapp };
