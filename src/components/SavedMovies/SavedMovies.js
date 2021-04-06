import React from "react";

import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  
  React.useEffect(() => {
    props.handleFindFilm("");
  }, [1]);

  return (
    <>
      <Header
        onOpenMenu={props.onOpenMenu}
        onCloseMenu={props.onCloseMenu}
        loggedIn={props.loggedIn}
        menuIsOpen={props.menuIsOpen}
      />
      <SearchForm handleFindFilm={props.handleFindFilm} handleChecked={props.handleChecked}/>
      {props.isLoadingData && <Preloader />}
      <MoviesCardList
        films={props.films}
        handleDeleteMovie={props.handleDeleteMovie}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
