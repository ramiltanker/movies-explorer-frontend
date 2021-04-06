import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const location = useLocation();
  const moviesIsActive =
    location.pathname === "/movies" ? "header__link-active" : "";

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
    if (moviesIsActive) {
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
    } else {
      setRenderFilms(props.films);
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
      setRenderFilms(props.films.slice(0, renderFilms.length + 2));
      if (renderFilms.length >= props.films.length - 2) {
        setShowMoreButton(false);
      }
    }
  }

  return (
    <section className="elements">
      {renderFilms.map((data) => (
        <MoviesCard
          film={data}
          films={props.films}
          savedMoviesId={props.savedMoviesId}
          key={data.id || data._id}
          handleSaveFilm={props.handleSaveFilm}
          handleDeleteMovie={props.handleDeleteMovie}
        />
      ))}
      <button
        className={`${
          isShowMoreButton && moviesIsActive
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
