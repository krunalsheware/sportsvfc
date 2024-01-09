import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import './Carousel.css'

const Carousel = () => {
  const cardStyle = {
    padding: 0,
    textAlign: "center",
    margin: "auto",
    width: "100%", // Adjust this width as needed
    height: "400px",
    padding: "10px",
    maxWidth: "300px", // Maximum width of each card
  };

  const containerStyle = {
   
    margin: "auto",
    marginTop: "40px",
    width: "95%", // Adjust this width as needed
    // border: "1px solid red",

  };

  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 768, // Medium screen
          settings: {
            slidesToShow: 1, // Show 3 images for medium screens
          },
        },
        {
          breakpoint: 480, // Small screen
          settings: {
            slidesToShow: 1, // Show 1 images for small screens
          },
        },
      ],
  };

  return (
    <div style={containerStyle} >
      <h2 style={{ textAlign: "center" }}> Our Fencers</h2>
      <Slider {...settings} className="mx-5 my-5">
        <div className="card">
          <img
            src="./fencerimg/Daminidi.jpeg"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Damini Rambhad</h5>
            <h6>International Medalist</h6>
          </div>
        </div>

        <div className="card">
          <img
            src="./fencerimg/khushi.jpg"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Khushi Thatere</h5>
            <h6>International Medalist</h6>
          </div>{" "}
        </div>
        <div className="card">
          <img
            src="./fencerimg/lumbini.jpeg"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Lumbini Meshram</h5>
            <h6>International Fencer</h6>
          </div>{" "}
        </div>
        <div className="card">
          <img
            src="./fencerimg/shruti.jpeg"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Shruti Joshi</h5>
            <h6>International Fencer</h6>
          </div>{" "}
        </div>
        <div className="card">
          <img
            src="./fencerimg/krunal.jpg"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Krunal Sheware</h5>
            <h6>National Medalist</h6>
          </div>{" "}
        </div>
        <div className="card">
          <img
            src="./fencerimg/aveshimg.png"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Aavesh Somkuwar</h5>
            <h6>National Medalist</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="./fencerimg/pranay.jpeg"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Pranay Pimpalkar</h5>
            <h6>National Medalist</h6>
          </div>{" "}
        </div>
        <div className="card">
          <img
            src="./fencerimg/sayli.jpeg"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Sayli Ukey</h5>
            <h6>National Medalist</h6>
          </div>{" "}
        </div>
        <div className="card">
          <img
            src="./fencerimg/sparshimg.jpeg"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Sparsh Binkar</h5>
            <h6>National Medalist</h6>
          </div>{" "}
        </div>
        <div className="card">
          <img
            src="./fencerimg/yashimg.png"
            class="card-img-top"
            alt="..."
            className="w-100"
            style={cardStyle}
          />
          <div class="card-body">
            <h5 class="card-title">Yash Sontakke</h5>
            <h6>National Fencer</h6>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export { Carousel };
