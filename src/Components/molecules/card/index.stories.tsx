import { Story } from "@storybook/react";
import React from "react";
import Infocard from "./index";
import bookPic from "./../../../../public/assets/images/book.png";

export default {
  title: "Molecule/Card",
};

type CardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imgSrc?: any;
  bookName: string;
  author: string;
  category: string;
  rating: number;
  ratingCount: number;
  style?: React.CSSProperties;
};

const Template: Story<CardProps> = (args) => <Infocard iconclick={()=>{}} {...args}></Infocard>;

export const card = Template.bind({});
card.args = {
  imgSrc: bookPic,
  bookName: "EL Will",
  author: "C Martin",
  category: "chemistry",
  rating: 4.5,
  ratingCount: 1200,
  style: { width: 300 },
};
