import React from "react";
import "./inter.module.css"
const International = () => {
  const inter = {
    margin: "auto",
    width: "90%",
    marginTop: "20px",
    color: "navy",
    fontSize: "20px",
  };

  const plyr = {
    margin: " auto auto 50px auto",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    alignItems: "center",
    gap: "20px",
    width: "50%",

    
  };

  return (
    <div>
      <h1 className="text-center px-8 py-6">Our Achivments</h1>
      <div style={inter} className="text-center px-8 py-6 container">
     
        <h1 className="text-center px-8 py-6 card">International Achivments</h1>
        <p>
          "We have total 4 fencers who are alreday represent INDIA in
          International competition 2 of them have achive a great success in
          International competition they secure Bronze medals in that
          competition and able to fly high the flag of INDIA. So you don't need
          to worry about future of your kid in this game.We have a one of the
          finest coach in our organizeation . Who provide a proper fencing
          training to your childern."
        </p>
      </div>
      <div className=" text-center card "  style={plyr} >
        
        <div >
          <img src="./fencerimg/Daminidi.jpeg" alt="Daminiimg" />
        </div>
        <div>
          <h1>Damini Rambhad</h1>
          <h4>(International Bronze Medalist)</h4>
          <p>
            Damini Rambhad is one of our senior player who play fencing from
            past 20 years. she is the one of the known fencer of maharashtra.
            She is also had a 2 international participation 1.South Asian Games
            ,Hydrabad 2.Foil Grand Prix ,Wuxi(China) and 1 international bronze
            medal (South asian games) .When talking about her national
            competiton she had many medals ain that competition and talking
            about state competition she won more then 70+ medals in that
            cometition.She also had a many big achivments in her life like she
            is a Shiv. chattrapati award winner this is the highest awards in
            maharashtra in terms of sports. She also had a District sports award
            which is the highest award in terms of sports in nagpur and more
            achivments she had. She is currently train under our Victorious
            Fencing Club and she had very glad to have cocah like Ankit
            Gajbhiye(Head Coach of VFC).
          </p>
        </div>
        <div>
          <img />
          <h1>Khushi Thatere</h1>
          <h4>(International Bronze Medalist)</h4>
          <p>
            She was just 13 Year old when she won the Bronze medal for INDIA.It
            was the proud moment for our country our club and her family members
            also. They never thought that one day Khushi will make then proud
            but she done it.She was fencing plyer from 2016 at that little time
            span she got best coaching from our Coach Ankit Gajbhiye and secure
            medal For INDIA in her median International competiiton.She
            participate in Asian cadet circuit Thailand.
          </p>
        </div>
        <div>
          <img src="./fencerimg/khushi.jpg" />
        </div>
        <div>
          <img src="./fencerimg/lumbini.jpeg" alt="Lumbiniimg" />
        </div>
        <div>
          <img />
          <h1>Lumbini Meshram</h1>
          <h4>(International participate)</h4>
          <p>
            Lumbini also participate in Asian cadet circuit Thailand along with
            khushi but deu to hard luck she will not able to reach podium.But
            she learn lots of things from that competitions and never stop
            learning.She is also one of the best plyaer of our club.Her parents
            always support her in every situation and she never give up in any
            situation.Currently she has under going traning in NCOE Khelo India
            Center Of Gujrat.
          </p>
        </div>
        <div>
          <img />
          <h1>Shruti Joshi</h1>
          <h4>(International participate)</h4>
          <p></p>
        </div>
        <div>
          <img src="./fencerimg/shruti.jpeg" alt="Shrutiimg" />
        </div>
      </div>
    </div>
  );
};

export { International };
