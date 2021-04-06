import React from "react";

import searchIcon from "../../images/search-icon.svg";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm(props) {
  const [movie, setMovie] = React.useState("");

  function findFilm() {
    props.handleFindFilm(movie);
  }
  
  return (
    <form className="search" name="search-form" method="post">
      <fieldset className="search__field-set">
        <img className="search__icon" src={searchIcon} alt="Поиск" />
        <input
          className="search__film-input"
          type="text"
          id="film-input"
          name="film-input"
          placeholder="Фильмы"
          required
          onChange={(event) => setMovie(event.target.value)}
        />
        <button className="search__button" type="button" onClick={findFilm}>
          Найти
        </button>
      </fieldset>
      <div className="search__checkbox">
        <FilterCheckbox handleChecked={props.handleChecked} />
        <p className="checkbox__text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
