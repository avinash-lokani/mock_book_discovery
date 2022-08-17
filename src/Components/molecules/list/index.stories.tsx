import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import List from ".";
import Maths from "../../../../public/assets/icons/maths.svg";
import Social from "../../../../public/assets/icons/social.svg"

export default {
	title: "Molecule/Lists",
	component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args}/>;

export const Mathematics = Template.bind({});

Mathematics.args = {
    icon : Maths,
    Subject : "Mathematics",
    topic_1 : "Algebra & linear algebra",
    topic_2 : "Calculus",
    topic_3 : "Statistics & Logistics",
    topic_4 : "Trignometry",
    iconStyle : {color : "#04D387",margin: "5px 5px 5px 5px",height: "24px",width:"24px"},
    style : {backgroundColor : "#FFF8E7", height:"36px",width:"36px"},
}

export const SocialScience = Template.bind({});
SocialScience.args = {
    icon : Social,
    Subject : "Social Science",
    topic_1 : "History",
    topic_2 : "Geography, maps & atlas",
    topic_3 : "Civics & economics",
    topic_4 : "Psychology",
    iconStyle : {color : "#04D387",margin: "5px 5px 5px 5px",height: "24px",width:"24px"},
    style : {backgroundColor : "#E7FFF6", height:"36px",width:"36px"},
}