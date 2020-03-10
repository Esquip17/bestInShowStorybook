import React, { Component } from "react";
import "./Dropdown.css";
import "./Dropdown.stories.js";

const Dropdown = props => {
  let classList = "";

  let types = ["white", "gray"];

  if (types.includes(props.type)) {
    classList += `dropdown__${props.type}`;
  }

  let optionsFill = () => {
    return props.options.map(option => {
      return <option>{option}</option>;
    });
  };

  return (
    <>
      <select className={classList} id="dropdown">
        {optionsFill()}
      </select>
    </>
  );
};

export default Dropdown;
