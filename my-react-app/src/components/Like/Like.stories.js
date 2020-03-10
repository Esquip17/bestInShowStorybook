import React from "react";
import { storiesOf } from "@storybook/react";
import "./Like.css";
import Like from "./Like";

//I am adding atributes we can access later
storiesOf("Like", module)
  .add("TEST", () => <Like />)
  .add("Like_outline", () => <Like />);
