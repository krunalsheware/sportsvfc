import React from "react";

const Coach = () => {
  const alpha = {
    marginTop: "90px",
    // border: "1px solid red",

  };

  const coachdes = {
    margin: "auto",
    fontStyle: "Helvetica",
    color: "#000",
    font: "18px/30px Verdana Arial sans-serif",
    lineHeight: "45px",
    textTransform: "uppercase",
  };
  const img = {
    border: "1px solid black",
    width: "80%",
    height: "40%",
    marginTop: "20px",
  };

  const box1 = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Grid with columns
    gap: "0px", // Gap between grid items
    margin: "auto",
    width: "95%",
    marginTop: "50px",


  };
  const smallScreenStyles = {
    width: "90%",
    marginTop: "30px",
  };

  const mediumScreenStyles = {
    width: "80%",
    marginTop: "40px",
  };

  const coachname = {
    fontFamily: "Yanone Kaffeesatz sans-serif",
  };
  return (
    <div className="text-center mx-4 my-4" >
      <h1>
        Our Coach
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mx-auto lg:w-80 mt-10 md:mt-16 lg:mt-20">

        <div 
        >
          
          <img src="./coach.jpg" alt="coachimg" />
        </div>
        <div className=" text-base md:text-sm lg:text-md"
>
          <h2>
            About Coach
          </h2>
          <p  >
            Ankit Gajbhiye, a former accomplished fencer, now leads our
            Victories Fencing Club as the head coach. With a fencing journey
            that commenced in 2006, he has participated in sevral national
            competitions, securing numerous well-deserved medals. He holds an
            NIS(National Institute Of Sports) Diploma in fencing from NS-NIS
            Patiala (2022-2023) and a certificate from NS-NIS Aurangabad
            (20-20). Ankit's prowess as a player is evident in his multiple
            medal victories. With over 8 years of coaching experience, he has
            groomed numerous fencers from Nagpur to excel at both national and
            international levels. His unique insight, derived from his player
            days, enables him to tailor coaching methods and mind-set strategies
            for each fencer's success. Ankit Gajbhiye's journey from player to
            coach enriches our club's legacy of excellence.
          </p>
          <p>
            " While fencing demands participants to develop quick reaction,
            sharp focus, self-control and strategic thinking, it also stimulates
            creativity and teaches acts of good, professional sportsmanship."
          </p>
          <div>
            <h3>Ankit Gajbhiye</h3>
            <h5 className="">-NIS Coach </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Coach };
