import React, { Component } from "react";
import "./Dropdown.css";
import "./Dropdown.stories.js";

const Dropdown = props => {
  let classList = "";

  let types = ["white", "gray", "smallWhite", "smallGray"];

  if (types.includes(props.type)) {
    classList += `dropdown__${props.type}`;
  }

  return (
    <form>
      <select className={classList} id="dropdown">
        <option value="">Select</option>
        <option value="">Select1</option>
        <option value="">Select2</option>
        <option value="">Select3</option>
        <option value="">Select4</option>
      </select>
    </form>
  );
};
