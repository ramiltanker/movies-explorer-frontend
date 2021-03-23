import React from "react";
import { Link, useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import imageCardTest from "../../images/imageCardTest.png";
import imageTest6 from "../../images/imageTest6.png";
import SavedMovies from "../SavedMovies/SavedMovies";

function MoviesCardList(props) {
  const location = useLocation();
  const moviesIsActive =
    location.pathname === "/movies" ? "header__link-active" : "";
  const savedMoviesIsActive =
    location.pathname === "/saved-movies" ? "header__link-active" : "";
    
  const [renderFilms, setRenderFilms] = React.useState([]);
  const [isShowMoreButton, setShowMoreButton] = React.useState(true);

  // Ширина экрана
  const [screenWidth, setScreenWidth] = React.useState(0);


  function updateScreenWidth() {
    setScreenWidth(window.innerWidth);
  }

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  // Ширина экрана

  React.useEffect(() => {
    if (screenWidth >= 1280) {
      setRenderFilms(props.films.slice(0, 12));
    }
    if (screenWidth <= 1024) {
      setRenderFilms(props.films.slice(0, 8));
    }
    if (screenWidth <= 425) {
      setRenderFilms(props.films.slice(0, 5));
    }
    if (renderFilms === props.films.length) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }, [props.films, screenWidth]);

  function handleShowFilms() {
    if (screenWidth >= 1280) {
      setRenderFilms(props.films.slice(0, renderFilms.length + 3));
      if (renderFilms.length >= props.films.length - 3) {
        setShowMoreButton(false);
      }
    }
    if (screenWidth <= 1024) {
      setRenderFilms(props.films.slice(0, renderFilms.length + 2));
      if (renderFilms.length >= props.films.length - 2) {
        setShowMoreButton(false);
      }
    }
    if (screenWidth <= 425) {
      setRenderFilms(props.films.slice(0, renderFilms.length + 1));
      if (renderFilms.length >= props.films.length - 1) {
        setShowMoreButton(false);
      }
    }
  }

  const movies = (
    <>
      <div className="card">
        <img className="card__image" src={imageCardTest} alt="Фильм" />
        <div className="card__container">
          <div className="card__box">
            <p className="card__name">33 слова о дизайне</p>
            <p className="card__time">1ч 47м</p>
          </div>
          <button
            className="card__like-button card__like-button_active"
            type="button"
          ></button>
        </div>
      </div>
      <div className="card">
        <img className="card__image" src={imageTest6} alt="Фильм" />
        <div className="card__container">
          <div className="card__box">
            <p className="card__name">Книготорговцы</p>
            <p className="card__time">1ч 37м</p>
          </div>
          <button
            className="card__like-button card__like-button_active"
            type="button"
          ></button>
        </div>
      </div>
    </>
  );

  return (
    <section className="elements">
      {moviesIsActive ? movies : ""}
      {renderFilms.map((data) => (
        <MoviesCard film={data} />
      ))}
      <button
        className={`${
          isShowMoreButton
            ? "elements__button-more"
            : "elements__button-more_inactive"
        }`}
        type="button"
        onClick={handleShowFilms}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
