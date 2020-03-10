import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";

storiesOf("Dropdown", module)
  .add("Dropdown Gray", () => (
    <Dropdown
      label="Dropdown Gray"
      type="gray"
      options={["Select", "A", "B", "C"]}
    />
  ))
  .add("Dropdown White", () => (
    <Dropdown
      label="Dropdown White"
      type="white"
      options={["Select", "A", "B", "C"]}
    />
  ));
