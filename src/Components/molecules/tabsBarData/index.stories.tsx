import * as React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsBarData from ".";

export default {
	title: "Molecule/TabsBarData",
	component: TabsBarData,
} as ComponentMeta<typeof TabsBarData>;

const Template: ComponentStory<typeof TabsBarData> = () => <TabsBarData handleClick={(id: string)=>{
	console.log("working "+ id);
	
} } />;

export const TabsBarDataStory = Template.bind({});