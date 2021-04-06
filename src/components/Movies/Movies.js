import React from "react";

import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  return (
    <>
      <Header
        onOpenMenu={props.onOpenMenu}
        onCloseMenu={props.onCloseMenu}
        loggedIn={props.loggedIn}
        menuIsOpen={props.menuIsOpen}
      />
      <SearchForm
        handleFindFilm={props.handleFindFilm}
        handleChecked={props.handleChecked}
      />
      {props.isLoadingData && <Preloader />}
      <MoviesCardList
        films={props.films}
        savedMoviesId={props.savedMoviesId}
        savedFilms={props.savedFilms}
        handleSaveFilm={props.handleSaveFilm}
        handleDeleteMovie={props.handleDeleteMovie}
      />
      <Footer />
    </>
  );
}

export default Movies;
