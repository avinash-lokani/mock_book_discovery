import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FollowReviews from ".";
import Riya from "../../../../public/assets/images/person1.png"
import AnvithaSharma from "../../../../public/assets/images/person2.png"

export default {
	title: "Molecule/FollowReviews",
	component: FollowReviews,
} as ComponentMeta<typeof FollowReviews>;

const Template: ComponentStory<typeof FollowReviews> = (args) => <FollowReviews {...args}/>;
export const Reviews = Template.bind({});
Reviews.args = {
    avatar :  Riya,
    reviewerName:"Riya",
    designation:"Student",
    comment:"JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack",
    rating:4.5
}

export const Reviews1 = Template.bind({});
Reviews1.args = {
    avatar :  AnvithaSharma,
    reviewerName:"Anvitha Sharma",
    designation:"Student",
    comment:"JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack",
    rating:4.5
}