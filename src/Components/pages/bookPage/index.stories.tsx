import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookPage from ".";

export default {
  title: "Page/BookPage",
  component: BookPage,
} as ComponentMeta<typeof BookPage>;

const Template: ComponentStory<typeof BookPage> = () => <BookPage />;

export const BookPageStory = Template.bind({});
