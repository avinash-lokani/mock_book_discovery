import * as React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AlsoRead from ".";
import book1 from "./../../../../public/assets/images/alsoread1.png";
import book2 from "./../../../../public/assets/images/alsoread2.png";

export default {
    title: "Molecule/AlsoRead",
    component: AlsoRead
} as ComponentMeta<typeof AlsoRead>;

const Template : ComponentStory<typeof AlsoRead> = args => (
    <AlsoRead {...args}/>
    );
    export const AlsoReadChem = Template.bind({});

    AlsoReadChem.args = {
    bookImg: book1,
    bookName: "Inorganic Chemistry",
    category: "Chemistry",
    rating: "4.5",
    peopleRated: 830
}

export const AlsoReadBio = Template.bind({});

AlsoReadBio.args = {
bookImg: book2,
bookName: "Inorganic Chemistry",
category: "Chemistry",
rating: "4.5",
peopleRated: 830
}