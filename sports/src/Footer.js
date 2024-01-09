import React from "react";
// import "./Components/footer.css";

import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { CiMapPin } from "react-icons/ci";
import { useState } from "react"; // If state is needed

const Footer = () => {
  const footerStyle = {
    width: "95%", // Set the width to 90% of the webpage
    margin: "0 auto", // Center the footer horizontally
    // Add other styles as needed
  };
  return (
    <footer className="bg-gray-500 text-white py-4">
      <div className="container">
        <div className="row">
          {/* First Column: Address and Timing */}
          <div className="col-md-4 font-extralight ">
            <h4>Our Club's Address :</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <CiMapPin className="me-2 ml-20  font-extralight" />
                Victorious Fencing Club,
                <br />
                District Sport Office, Nagpur, Maharashtra
              </li>
              <li>* Morning: 6am To 8am</li>
              <li>* Evening: 5pm To 7pm</li>
            </ul>
          </div>

          {/* Second Column: Social Links */}
          <div className="col-md-4 ">
            <h4>Our Social Links :</h4>
            <ul className="list-unstyled border-none font-extralight">
              <li className="m-2 flex ">
                <FaInstagram className="me-2" />
                <a
                  href="https://instagram.com/victorious_fencers_nag?utm_source=qr&igshid=MThlNWY1MzQwNA=="
                  className="text-white no-underline"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2 flex">
                <FaFacebook className="me-2" />
                <a href="#" className="text-white no-underline">
                  Facebook
                </a>
              </li>
              <li className="flex">
                <FaYoutube className="me-2" />
                <a href="#" className="text-white no-underline">
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Contact Details */}
          <div className="col-md-4 font-extralight ">
            <h4>Reach Us :</h4>
            <ul className="list-unstyled ">
              <li className="flex mb-4">
                <HiOutlineMail className="me-2" />
                <a href="#" className="text-white no-underline">
                  vfc@gmail.com
                </a>
              </li>
              <li className="flex ">
                <HiPhone className="me-2" />
                <a href="tel:9021129442" className="text-white no-underline">
                  +91-9021129442
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm text-center">
            &copy;{new Date().getFullYear()} This VFC inc. |
            <a href="#"> All rights reserved</a> |{" "}
            <a href="#">Terms of service</a> | <a href="#">Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
