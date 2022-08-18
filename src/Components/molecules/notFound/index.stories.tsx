import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NotFoundComponent from ".";

export default {
  title: "molecule/notFound",
  component: NotFoundComponent
}as ComponentMeta<typeof NotFoundComponent>;

type NotfoundProps = {
  children: string;
  style?: React.CSSProperties;
};

// eslint-disable-next-line @typescript-eslint/ban-types

const Template: ComponentStory<typeof NotFoundComponent> = (args) => (
  <NotFoundComponent {...args}></NotFoundComponent>
);

export const NotFound = Template.bind({});

NotFound.args = {
  placeholder: "No Results found. Please try a different search term",
};