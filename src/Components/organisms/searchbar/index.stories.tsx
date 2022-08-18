import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from ".";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "Organism/SearchBar",
	component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => 
<BrowserRouter>
<SearchBar {...args}/>
</BrowserRouter>

export const Search = Template.bind({});
Search.args = {
	placeholder : "Search here by book title, author or ISBN"
}
