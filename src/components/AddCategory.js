import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 1) {
      setCategories((category) => [inputValue, ...category]);
      return setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="top-form">
      <input
        placeholder="look for your awesome gift..."
        type="text"
        onChange={handleChange}
        value={inputValue}
      ></input>
      <button type="submit">🔎</button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
