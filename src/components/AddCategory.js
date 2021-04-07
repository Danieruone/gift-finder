import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((category) => [...category, inputValue]);
    return setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="look for your awesome gift"
        type="text"
        onChange={handleChange}
        value={inputValue}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
