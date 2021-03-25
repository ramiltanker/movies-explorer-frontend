import React from "react";

import banner from "../../images/banner.png";
import logo from '../../images/logo.svg';
function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__image" src={banner} alt="Баннер"></img>
    </section>
  );
}

export default Promo;
