import React from "react";
import { Link, useLocation } from "react-router-dom";
function MoviesCard(props) {
  const location = useLocation();
  const moviesIsActive =
    location.pathname === "/movies" ? "header__link-active" : "";

  return (
      <div className="card">
        <img className="card__image" src={props.film.image} alt="Фильм" />
        <div className="card__container">
          <div className="card__box">
            <p className="card__name">{props.film.nameRU}</p>
            <p className="card__time">{props.film.duration}</p>
          </div>
          <button className={`${moviesIsActive ? 'card__like-button' : 'card__close-button'}`} type="button"></button>
        </div>
      </div>
  );
}

export default MoviesCard;
