import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchResultCard from ".";
import book from "./../../../../public/assets/images/book.png";
import avatar from "../../../../public/assets/images/jdlee.png";

export default {
  title: "Molecule/SearchResultCard",
  component: SearchResultCard,
} as ComponentMeta<typeof SearchResultCard>;

const Template: ComponentStory<typeof SearchResultCard> = (args) => (
  <SearchResultCard {...args} />
);
export const SearchResultCardStory = Template.bind({});

SearchResultCardStory.args = {
    id: 1,
    bookImg: book,
    authorAvtar: avatar,
    authorName: "J D Lee",
    bookName: "Inorganic Chemistry",
    bookDescription: "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    category: "Chemistry",
    rating: 4.5,
    peopleRated: 830,
    onClick: () => console.log("")
}
