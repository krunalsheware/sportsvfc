import { React } from "react";
import Nav from "./Nav";
import { Footer } from "./Footer";
import { Whatsapp } from "./Components/Whatsapp";

const Aboutus = () => {
  const box1 = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Grid with columns
    gap: "0px", // Gap between grid items
    margin: "auto",
    width: "95%",
    marginTop: "50px",
    marginBottom: "70px",
  };
  return (
    <div>
      <Nav />
      <Whatsapp />
      <div className="mt-28 text-center container">
        {" "}
        <h3 className="border-b-2">Welcome to Victorious Fencing Club</h3>
        <p>At Victirous Fencing Club, we're more than just a place to learn and practice
        the art of fencing. We're a passionate community dedicated to honing
        skills, fostering sportsmanship, and nurturing a love for the sport.</p>
      </div>
      <p style={box1} >
        <h3>* Our Story :-</h3>
       <p> Established with a vision to create a hub for fencing enthusiasts of all
        ages and skill levels, Victirous Fencing Club has been a cornerstone of
        excellence in the fencing world for years. Founded by a team of seasoned
        fencing professionals, our club is driven by a collective commitment to
        offer exceptional training and a vibrant community for all who share a
        passion for this unique sport.</p>
        <h3>*What Sets Us Apart :-</h3>
        <p>At Victirous Fencing Club, we pride ourselves on blending the traditional aspects of
        fencing with innovative coaching techniques. Our experienced instructors
        bring a wealth of expertise, providing personalized guidance to help
        each member reach their full potential. Whether you're a beginner
        looking to grasp the basics or an advanced fencer aiming for competitive
        success, our comprehensive programs cater to all levels.</p>
        <h3>*Our Values :-</h3>
        <p>Sportsmanship, discipline, and camaraderie lie at the core of Victirous Fencing Club's
        ethos. We emphasize not only the technical aspects of fencing but also
        the values it instills: respect, perseverance, and teamwork. Our
        inclusive environment encourages diversity and welcomes individuals from
        all walks of life, creating a supportive space where everyone feels
        valued and motivated to succeed.</p>
        <h3>*What We Offer :-</h3>
       <p> From group classes to private coaching, open bouting sessions to elite
        training programs, Victirous Fencing Club provides a spectrum of opportunities
        tailored to your specific goals. Our state-of-the-art facilities offer a
        dynamic and safe space for practice, competition, and growth.</p>
        <h3>*Join the Victirous Fencing Club Family :-</h3>
    <p>    Whether you're driven by the thrill of competition or seeking a
        fulfilling recreational activity, Victirous Fencing Club is the place where
        your fencing journey begins or continues. Join us to experience the
        excitement, challenge, and fulfillment that fencing brings.</p>
        <h3>*Connect With Us :-</h3>
      <p>  Ready to embark on your fencing journey or curious to learn more about
        what Victirous Fencing Club has to offer? Reach out to us today. We're excited
        to welcome you into our vibrant fencing community!</p>
      </p>
      <hr></hr>

      <hr/>
      <Footer />
    </div>
  );
};

export { Aboutus };
