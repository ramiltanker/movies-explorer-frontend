import React from "react";

function FilterCheckbox(props) {

  function handleChange(event) {
    props.handleChecked(event.target.checked);
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
