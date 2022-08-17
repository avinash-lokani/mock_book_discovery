import * as React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import HomePageDetail from ".";

export default {
	title: "Organism/HomePageDetail",
	component: HomePageDetail,
} as ComponentMeta<typeof HomePageDetail>;

const Template: ComponentStory<typeof HomePageDetail> = () => <HomePageDetail />;

export const HomePageDetailStory = Template.bind({});