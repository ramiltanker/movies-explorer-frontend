import React from "react";

import seacrhIcon from "../../images/search-icon.svg";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
  return (
    <form className="search" name="search-form" method="post">
      <fieldset className="search__field-set">
        <img className="search__icon" src={seacrhIcon} alt="Поиск" />
        <input
          className="search__film-input"
          id="film-input"
          name="film-input"
          value="Фильмы"
          required
        />
        <button className="search__button" type="submit">
          Найти
        </button>
      </fieldset>
      <div className="search__checkbox">
        <FilterCheckbox />
        <p className="checkbox__text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
