import { Story } from "@storybook/react";
import React from "react";
import NotFoundComponent from ".";

export default {
  title: "molecule/notFound",
};

type NotfoundProps = {
  children: string;
  style?: React.CSSProperties;
};

// eslint-disable-next-line @typescript-eslint/ban-types

const Template: Story<NotfoundProps> = (args) => (
  <NotFoundComponent {...args}></NotFoundComponent>
);

export const NotFound = Template.bind({});

NotFound.args = {
  children: "No Results found. Please try a different search term",
};
