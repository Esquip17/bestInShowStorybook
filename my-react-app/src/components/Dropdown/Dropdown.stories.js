import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";

storiesOf("Dropdown", module).add("Dropdown White", () => (
  <Dropdown label="Dropdown White" type="white" />
));
