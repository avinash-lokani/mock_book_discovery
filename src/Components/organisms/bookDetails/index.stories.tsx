import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookDetails from ".";

export default {
  title: "Organism/BookDetails",
  component: BookDetails,
} as ComponentMeta<typeof BookDetails>;

const Template: ComponentStory<typeof BookDetails> = (args) => (
  <BookDetails {...args} />
);

export const bookDetails = Template.bind({});
bookDetails.args = {
  id: 5,
};
