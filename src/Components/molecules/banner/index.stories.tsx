import bookPic from "./../../../../public/assets/images/bannerimg.svg";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BannerComponent from ".";

export default {
  title: "Molecule/Banner",
  component: BannerComponent,
} as ComponentMeta<typeof BannerComponent>;

const Template: ComponentStory<typeof BannerComponent> = (args) => (
  <BannerComponent {...args}></BannerComponent>
);

export const Banner = Template.bind({});

Banner.args = {
  imgSrc: bookPic,
};
