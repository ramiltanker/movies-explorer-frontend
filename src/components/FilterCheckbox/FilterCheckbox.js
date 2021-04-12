import React from "react";

import { useLocation } from "react-router-dom";

function FilterCheckbox(props) {

  const location = useLocation();
  const moviesIsActive =
    location.pathname === "/movies" ? "header__link-active" : "";

  function handleChange(event) {
    props.handleChecked(event.target.checked);
    if (moviesIsActive) {
      props.handleFilterShortMovies(props.nameOfFilm);
    } else {
      props.handleFilterShortSavedMovies(props.nameOfFilm);
    }
  }

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        className="checkbox__input"
        onChange={handleChange}
      />
      <span className="checkbox__slider"></span>
    </label>
  );
}

export default FilterCheckbox;
