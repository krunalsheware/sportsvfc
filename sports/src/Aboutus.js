import { React } from "react";
import Nav from "./Nav";
import { Footer } from "./Footer";
import { Whatsapp } from "./Components/Whatsapp";
import { HeroSection } from "./Components/Hero";

const Aboutus=()=>{

    const box1 = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // Grid with columns
        gap: "0px", // Gap between grid items
        margin: "auto",
        width: "95%",
        marginTop: "50px",
    
    
      };
    return(
        <div>
<Nav/>
<Whatsapp/>
            <div className="container">
        <div className="text-center">
          <h1>Our Coach Says</h1>
          <div className="primary" style={box1}>
         <div>   <p>
              Acihvenig a goal reuqries caerufl and knwoelgdaelbe plnainng and
              good excetuoin, esepiclaly in the area of copmtetivie Olmyipc
              sprost, such as fecnnig. That’s why we put a lot of plnainng and
              prperataoin into how our prgoarms are sturtcrued and run, based on
              the many years of our cocaehs’ cocaihng exepirnece in triainng
              naitnoal teams and atlhtees of diffrenet leevsl, from naitnoal
              chmaipnohspis to world cups and Olmyipc games.
            </p></div>
         <div>
            <img
            src="#"
            alt="img"/>
         </div>
          </div>
          <div style={box1}>
            {" "}
          <div>
            <img 
            src=""
            alt="img"/>
            
          </div>
          <div>  
            <div><p>
              Our fecnnig prgoarm is deisnged from years of exepirneec,
              succseess and faliruse, and adavcned sceitnfiic stdueis and
              exepiremtns. It is built upon our track record of taking young
              chlirden and rasinig them to become naitnoal chmaipnos in seevarl
              caetogirse.
            </p></div>
            <div></div>
            </div>
          </div>
          <div style={box1}>
            {" "}
           <div></div>
           <div> <p>
              There is no secret fomrlua for succses in any sport, and
              deifinetly not in fecnnig. A road to succses in any sport, and
              patrciluraly in fecnnig, is paved with a lot of hard work,
              deidaciton and passoin, dicspiilen, and sarcficie, ledanig to joy,
              diasppiotnemtn, vitcroy, team spriti, inidivudal pride and
              inpsritaoin.
            </p></div>
          </div>
          <div style={box1}>
            {" "}
          <div>  <p>
              Succses in the sport is hard work for all the people inovvled –
              the atlhtee, his or her paertns, cocaehs, freidns, scohlo,
              temaamets and the club.
            </p></div>
          <div></div>
          </div>
          <div style={box1}>
            {" "}
          <div></div>
          <div>  <p>
              What we have leraend over all the years is that we cannot
              guranaete you or your child will become a chmaipon or an Olmyipna,
              but we can guranaete that with each and every member and
              patrcipinat in our prgoarm we will do our best at every level to
              help the atlhtee reach hi/sehr full poettnail. That’s our pledge
            </p></div>
          </div>
          <h2>WECLMOE TO VICTORIOUS FENCING CLUB!</h2>
        </div>
      </div>
            <Footer/>
        </div>
    )
}

export {Aboutus};