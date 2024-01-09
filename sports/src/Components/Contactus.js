// import "./Contactus.css";
import React from "react";
import { Footer } from "../Footer";
import Nav from "../Nav";
import { Whatsapp } from "./Whatsapp";

const ContactUs = () => {
  return (
    <div>
      <Nav />
      {/* <div>
        <h1 className="text-3xl text-white bg-gray-500 border rounded font-bold mt-20 mb-8 py-8 text-center">
          "ContactUs"
        </h1>
        </div> */}
      <div class="container  grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-0 md:p-8 my-6 md:my-20  ">
       
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Fill this form we will contact you:
          </h3>
          <div className="flex flex-col items-center ">
            <form
              action="https://formspree.io/f/xaygjjnj"
              method="POST"
              className="contact-inputs flex flex-col gap-4 md:gap-8 md:w-80"
            >
              <input
                name="name"
                placeholder="enter your name here"
                autoComplete="off"
                type="text"
                required
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />

              <input
                name="number"
                placeholder="enter your number here"
                autoComplete="off"
                type="number"
                required
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <textarea
                name="Message"
                cols="30"
                rows="5"
                required
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                autoComplete="off"
                placeholder="enter your message"
              ></textarea>
              <input
                type="submit"
                value="Send"
                className="w-full py-3 px-6 bg-indigo-500 text-white font-semibold rounded-md cursor-pointer hover:bg-indigo-600 transition duration-300 ease-in-out border border-indigo-500 md:mt-[-10px] md:w-auto"
              />
            </form> 
          </div>
        </div>
        <div class=" text-center overflow-hidden my-4  sm:max-w-full md:max-w-800 lg:max-w-900 xl:max-w-1000 ">
          <h4>Reach Us</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.275223710698!2d79.07436907412259!3d21.1812229825268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1705493d715%3A0x1e215f6c3a933ab9!2sVictorious%20Fencing%20Club!5e0!3m2!1sen!2sin!4v1694337249346!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            class="w-full"
          ></iframe>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export { ContactUs };
