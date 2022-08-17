import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchResult from ".";
import BookDescription from "../bookDescription";
import book1 from "../../../../public/assets/images/book1.png";
import book2 from "../../../../public/assets/images/book2.png";


export default {
	title: "Molecule/SearchResult",
	component: SearchResult,
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => <SearchResult {...args}/>;

export const searchResult = Template.bind({});
searchResult.args = {
	results : [<BookDescription key = {"1"} bookImg={book1} bookTitle={"Super Simple Biology"} bookAuthor={"By D K Hudson"} bookCategory={"Humorous"}/>,<BookDescription key = {"2"} bookImg={book2} bookTitle={"Super Simple Physics"} bookAuthor={"By D K Hudson"} bookCategory={"Humorous"}/>]
}