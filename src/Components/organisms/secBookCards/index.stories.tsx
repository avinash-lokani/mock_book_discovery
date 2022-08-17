import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardGroup from ".";

export default {
  title: "Organism/CardGroup",
  component: CardGroup,
} as ComponentMeta<typeof CardGroup>;

const Template: ComponentStory<typeof CardGroup> = () => <CardGroup filterType={"recommendations"} heading={"Recommendations"}/>;


export const cardGroup = Template.bind({});
