import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Review from ".";
import Radha from "../../../../public/assets/images/reviewer_1.png"
import Mira from "../../../../public/assets/images/reviewer_2.png"

export default {
	title: "Molecule/Review",
	component: Review,
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args}/>;
export const Reviews = Template.bind({});
Reviews.args = {
    avatar :  Radha,
    reviewerName:"Radha",
    designation:"Proffesor at Harvard University",
    comment:"Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the ",
    rating:4.5
}

export const Reviews1 = Template.bind({});
Reviews1.args = {
    avatar :  Mira,
    reviewerName:"Mira",
    designation:"Proffesor at Harvard University",
    comment:"Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the ",
    rating:4.5
}