import * as React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AllTopics from ".";

export default {
	title: "Organism/AllTopics",
	component: AllTopics,
} as ComponentMeta<typeof AllTopics>;

const Template: ComponentStory<typeof AllTopics> = () => <AllTopics />;

export const AllTopicStory = Template.bind({});