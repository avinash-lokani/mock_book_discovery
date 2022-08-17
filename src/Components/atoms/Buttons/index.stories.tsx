import { Story } from "@storybook/react";
import { ButtonProps } from "@material-ui/core/Button";
import React from "react";
import ButtonComponent from ".";

export default {
  title: "Atom/buttons",
};

type MyButtonProps = ButtonProps;

const Template: Story<MyButtonProps> = (args) => (
  <ButtonComponent {...args}></ButtonComponent>
);

export const simpleButton = Template.bind({});

simpleButton.args = {
  children: "Apply",
  variant: "contained",
  color: "inherit",
};
