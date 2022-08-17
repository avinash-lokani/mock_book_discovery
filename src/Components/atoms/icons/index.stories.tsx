import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Alltopics from "../../../../public/assets/icons/alltopics.svg"
import Authors from "../../../../public/assets/icons/authors.svg"
import Bookmark from "../../../../public/assets/icons/bookmark.svg"
import Icons from ".";


export default{
    title:"Atom/Icons",
    Component:Icons
} as ComponentMeta<typeof Icons>;

const Template : ComponentStory<typeof Icons> = (args) => (
    <Icons {...args} />
);

export const AllTopicsIconStory = Template.bind({});
AllTopicsIconStory.args = {
    icon: Alltopics, 
};

export const AuthorIcon = Template.bind({});
AuthorIcon.args = {
    icon: Authors,
    style : {color: '#000000', width:"24px" , height:"24px"}
};

export const BookmarkIcon = Template.bind({});
BookmarkIcon.args = {
    icon: Bookmark,
    style:{color: '#000000', width:"24px" , height:"24px"}

};

