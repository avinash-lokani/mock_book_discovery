import { Story } from "@storybook/react";
import React from "react";
import ReadingCardComponent from "./index";
import bookPic from "./../../../../public/assets/images/book.png";

export default {
  title: "Molecule/ReadingCard",
};

type ReadingCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imgSrc?: any;
  bookName: string;
  author: string;
  category: string;
  pagesRead: number;
  pagesTotal: number;
  style?: React.CSSProperties;
};

const Template: Story<ReadingCardProps> = (args) => (
  <ReadingCardComponent {...args}></ReadingCardComponent>
);

export const card1 = Template.bind({});
card1.args = {
  imgSrc: bookPic,
  bookName: "Inorganic Chemistry",
  author: "C Martin",
  category: "chemistry",
  pagesRead: 43,
  pagesTotal: 250,
  style: { width: 273, height: 140 },
};
