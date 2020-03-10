import React, { Component } from "react";
import "./Dropdown.css";
import "./Dropdown.stories.js";

const Dropdown = props => {
  let classList = "";

  let types = ["white", "gray"];

  if (types.includes(props.type)) {
    classList += `dropdown__${props.type}`;
  };

let optionsFill (props) =>{
    return props.options.map(option => {
      return <option>{option}</option>;
    });
  };

  return (
    <form>
      <select className={classList} id="dropdown">
        {optionsFill()}
      </select>
    </form>
  );
};

export default Dropdown;
