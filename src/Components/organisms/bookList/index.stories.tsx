import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import BookList from ".";

export default {
  title: "Organism/BookList",
  component: BookList,
} as ComponentMeta<typeof BookList>;

const Template: ComponentStory<typeof BookList> = () => (
  <BrowserRouter>
    <BookList />
  </BrowserRouter>
);
export const BookListStory = Template.bind({});
