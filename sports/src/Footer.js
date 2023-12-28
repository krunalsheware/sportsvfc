import React from "react";
// import "./Components/footer.css";

import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { CiMapPin } from 'react-icons/ci';
import { useState } from 'react'; // If state is needed

const Footer = () => {

  const footerStyle = {
    width: '100%', // Set the width to 90% of the webpage
    margin: '0 auto', // Center the footer horizontally
    // Add other styles as needed
  };
  return (
    <div className="container  bg-gray-900 rounded-lg text-white w-full sm:w-1/2 lg:w-full " style={footerStyle}>
      <div className="row py-6 px-6">
        <div className="col col1">
          <h4>Our Club's Address:</h4>
          <ul className="list-none">
            <li className="flex items-center mb-2">
              <CiMapPin className="iconm mr-2" />
              <div>
                Victorious Fencing Club,
                <br />
                District Sport Office, Nagpur, Maharashtra
                <br />
                Timing:
                <br />
                *Morning: 6am To 8am
                <br />
                *Evening: 5pm To 7pm
              </div>
            </li>
          </ul>
        </div><div className="col col2">
  <h4 className="text-white">Our Social Links:</h4>
  <ul className="list-none">
    <li className="flex items-center mb-2 text-white">
      <FaInstagram className="instagram mr-2" />
      <a href="https://instagram.com/victorious_fencers_nag?utm_source=qr&igshid=MThlNWY1MzQwNA==" className="colr1">Instagram</a>
    </li>
    <li className="flex items-center mb-2 text-white">
      <FaFacebook className="facebook mr-2" />
      <a href="#" className="colr2">Facebook</a>
    </li>
    <li className="flex items-center mb-2 text-white">
      <FaYoutube className="youtube mr-2" />
      <a href="#" className="colr3">Youtube</a>
    </li>
  </ul>
</div>
<div className="col col3">
  <h4 className="text-white">Our Contact Details:</h4>
  <ul className="list-none">
    <li className="flex items-center mb-2 text-white">
      <HiOutlineMail className="email mr-2" />
      <a href="#" className="text-white">vfc@gmail.com</a>
    </li>
    <li className="flex items-center text-white">
      <HiPhone className="phn mr-2" />
      <a href="tel:9021129442" className="text-white">+91-9021129442</a>
    </li>
  </ul>
</div>

      </div>
      <hr />
      <div className="row">
        <p className="col-sm text-center">
          &copy;{new Date().getFullYear()} This VFC inc. |
          <a href="#"> All right reserved</a> | <a href="#">Terms of service</a> | <a href="#">Privacy</a>
        </p>
      </div>
    </div>
  );
};

  
    // <footer className="bg-gray-800 text-white py-4">
    //   <div className="container mx-auto text-center">

    //     <p>&copy; 2023 Sports.com. All rights reserved.</p>
    //     <p>Created with Tailwind CSS</p>
    //   </div>
    // </footer>);

    {
      /* <>
<div className="main-footer">
     
     <div className="row">
       <div className="col col1">
         <h4>Our Club's</h4>
         <ul className="list-unstyled add">
         <CiMapPin className="iconm" />

           <li>
             {" "}
             Victorious Fencing Club ,
           </li>
           <li>District Sport Office , Nagpur ,Maharashtra</li>
           <li>
             Timing:
           </li>
           <li>*Morning : 6am To 8am</li>
           <li>*Evening : 5pm To 7pm</li>
          
        
          
           <li></li>
         </ul>
       </div>

       <div className="col col2">
         <h4>Our</h4>
         <ul className="list-unstyled add1">
           <li >
             <FaInstagram className="instagram" />
             <a href="https://instagram.com/victorious_fencers_nag?utm_source=qr&igshid=MThlNWY1MzQwNA==" className="colr1"> Instagram</a>
           </li>
           <li>
             <FaFacebook className="facebook" />
             <a href="#" className="colr2"> Facebook</a>
           </li>
           <li>
             <FaYoutube className="youtube" />
             <a href="#" className="colr3"> Youtube</a>
           </li>
         </ul>
       </div>
       <div className="col col3">
         <h4>Our </h4>
         <ul className="list-unstyled add">
           <li>
           <TfiEmail className="email" />

             <a href="#"> vfc@gmail.com</a>
           </li>
           
           
           <li><PiPhoneCallFill className="phn"/><a href="tel:9021129442">+91-9021129442</a></li>
         </ul>
       </div>
     
     </div>
     <hr/>
     <div className="row">
       <p className="col-sm ">
         &copy;{new Date().getFullYear()} This VFC inc.|
         <a href="3"> All right reserved</a> |{" "}
         <a href="#">Terms of service</a> | <a href="#">Privacy</a>
       </p>
     </div>
   </div></> */
    } 
   

export { Footer };
