import { Story } from "@storybook/react";
import React from "react";
import HeaderComponent from "./index";

export default {
  title: "Organism/Header",
};


const Template: Story = () => (
  <HeaderComponent ></HeaderComponent>
);

export const header = Template.bind({});

