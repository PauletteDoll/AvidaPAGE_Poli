import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Comu1 from "../comunidad/comuhome/comu1/Comu1";
import Header from "../header/Header";
import Comu2 from "../comunidad/comuhome/comu2/Comu2";

function Landing() {
  return (
    <div className="app-container">
      <Header />
      <Comu1 />
      <Comu2 />
    </div>
  );
}

export default Landing;
