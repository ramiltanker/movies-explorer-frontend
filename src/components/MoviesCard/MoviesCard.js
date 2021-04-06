import React from "react";
import { useLocation } from "react-router-dom";

import noImage from '../../images/no-image.jpg';

function MoviesCard(props) {
  const location = useLocation();

  const moviesIsActive =
    location.pathname === "/movies" ? "header__link-active" : "";
  const savedMoviesIsActive =
    location.pathname === "/saved-movies" ? "header__link-active" : "";

    const isLiked = moviesIsActive ? props.savedMoviesId.indexOf(props.film.id) !== -1 : '';

  const buttonLikeisActive = `${isLiked ? "card__like-button_active" : ""}`;

  function handleSaveFilm() {
    props.handleSaveFilm({
      nameRU: props.film.nameRU || "Нет данных",
      nameEN: props.film.nameEN || "Нет данных",
      duration: props.film.duration || "Нет данных",
      country: props.film.country || "Нет данных",
      director: props.film.director || "Нет данных",
      year: props.film.year || "Нет данных",
      description: props.film.description || "Нет данных",
      image: props.film.image.url || noImage,
      trailer: props.film.trailerLink,
      thumbnail: props.film.image.formats.thumbnail.url,
      movieId: props.film.id,
    });
  }

  function handleDeleteMovie() {
    props.handleDeleteMovie(props.film._id);
  }

  function handleClickButton() {
    if (moviesIsActive) {
      if (!isLiked) {
        handleSaveFilm();
      } else {
        handleDeleteMovie();
      }
    } else if (savedMoviesIsActive) {
      handleDeleteMovie();
    }
  }

  return (
    <div className="card">
      <a
        href={
          moviesIsActive ? `${props.film.trailerLink}` : `${props.film.trailer}`
        }
      >
        <img
          className="card__image"
          src={
            moviesIsActive
              ? `https://api.nomoreparties.co${props.film.image.url}`
              : props.film.image
          }
          alt={props.film.nameRU || props.film.nameEN}
        />
      </a>
      <div className="card__container">
        <div className="card__box">
          <p className="card__name">{props.film.nameRU || props.film.nameEN}</p>
          <p className="card__time">{`${Math.trunc(
            props.film.duration / 60
          )}h ${props.film.duration % 60}m`}</p>
        </div>
        <button
          className={`
          ${moviesIsActive ? "card__like-button" : "card__close-button"}
          ${buttonLikeisActive}
          `}
          onClick={handleClickButton}
          type="button"
        ></button>
      </div>
    </div>
  );
}

export default MoviesCard;
