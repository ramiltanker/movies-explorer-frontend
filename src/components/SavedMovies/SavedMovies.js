import React from "react";

import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function SavedMovies(props) {

  const [loggedIn, setLoggedIn] = React.useState(true);
  
  return (
    <>
      <Header
        onOpenMenu={props.onOpenMenu}
        onCloseMenu={props.onCloseMenu}
        loggedIn={loggedIn}
        menuIsOpen={props.menuIsOpen}
      />
      <SearchForm />
      <MoviesCardList films={props.films} />
      <Footer />
    </>
  );
}

export default SavedMovies;
