import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookPageDetails from ".";

export default {
  title: "Organism/BookPageDetails",
  component: BookPageDetails,
} as ComponentMeta<typeof BookPageDetails>;

const Template: ComponentStory<typeof BookPageDetails> = () => (
  <BookPageDetails id={5} />
);

export const BookPageStory = Template.bind({});
