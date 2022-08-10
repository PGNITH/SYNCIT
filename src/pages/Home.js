import logo from "../logo.svg";
import React from "react";
import "../App.css";
// import { useEffect } from 'react';
import Form  from "./Form";
import lottie from "lottie-web";
import reactLogo from "./device.json";
import { Link } from "react-router-dom";



function Home() {
    // const navigate = useNavigate();

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    });
  }, []);

  return (
    <div className="App">
      <header className="head">
        <div
          className="lo"
          style={{ display: "flex",  width: "100vw" }}
        >
          <img
            src={logo}
            height={30}
            style={{ padding: "20px 10PX" }}
          />
          <h1
            style={{
              fontFamily: "squid",
              position: "relative",
              padding: "0 1REM",
            
              fontSize: "1.5rem",
            }}
          >
            Syncit
          </h1>
        </div>
      </header>
      <div
        style={{
          display: "flex",
        
          justifyContent: "center",
        }}
      >
        <div id="react-logo" style={{ width: "40vw", height: "60vh" }} />{" "}
      </div>
      <h3 style={{ fontWeight: "100", textAlign: "center" }}>
        Share Code in Real-time with Developers
        <br />
        An online code editor for interviews, troubleshooting, teaching & more…
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Link style={{textDecoration:"none"}} to="/Login">
        <div
          className="button"
          style={{
            textDecoration:"none",
            background: "#A9A9A9",
            color: "black",
            padding: "5px",
            maxWidth: "10vw",
            borderRadius: "0px",
          }}
        >
         
          <h3 style={{textAlign:"center"}}>Code Now !!!</h3>
          
        </div>
        </Link>
        <br/><br/>
      </div>
    </div>
  );
}

export default Home;