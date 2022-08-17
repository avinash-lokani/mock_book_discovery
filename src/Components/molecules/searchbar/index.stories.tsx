import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from ".";

export default {
	title: "Molecule/SearchBar",
	component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args}/>;

export const Search = Template.bind({});
Search.args = {
	placeholder : "Search here by book title, author or ISBN"
}
