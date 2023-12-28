import React from "react";

const Coach = () => {
  const alpha = {
    marginTop: "90px",
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
    <div className=" text-center  md-5" style={alpha}>
      <h1>
        Our <span>Coach</span>
      </h1>

      <div style={box1}>
        <div style={img}
        >
           <style>
        {`
          @media (max-width: 767px) {
            div {
              width: 90%;
              margin-top: 30px;
            }
          }

          @media (min-width: 768px) and (max-width: 1023px) {
            div {
              width: 80%;
              margin-top: 40px;
            }
          }
        `}
      </style>
          <img src="./coach.jpg" alt="coachimg" />
        </div>
        <div className="contaier2">
          <h2>
            About <span>Coach</span>
          </h2>
          <p style={coachdes}>
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
          <p style={coachdes}>
            " While fencing demands participants to develop quick reaction,
            sharp focus, self-control and strategic thinking, it also stimulates
            creativity and teaches acts of good, professional sportsmanship."
          </p>
          <div style={coachname}>
            <h3>Ankit Gajbhiye</h3>
            <h5>-NIS Coach </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Coach };
