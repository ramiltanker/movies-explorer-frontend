import React from "react";

function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input type="checkbox" id="checkbox" name="checkbox" className="checkbox__input"/>
      <span className="checkbox__slider"></span>
    </label>
  );
}

export default FilterCheckbox;