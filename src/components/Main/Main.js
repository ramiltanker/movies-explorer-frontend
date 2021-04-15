import React from "react";

import AboutMe from "../AboutMe/AboutMe.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Promo from "../Promo/Promo.js";
import Techs from "../Techs/Techs.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function Main(props) {

  return (
    <>
      <Header
        onOpenMenu={props.onOpenMenu}
        onCloseMenu={props.onCloseMenu}
        loggedIn={props.loggedIn}
        menuIsOpen={props.menuIsOpen}
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
