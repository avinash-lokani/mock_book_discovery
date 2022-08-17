import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropDown from ".";

export default {
    title: "Molecule/DropDown",
    component: DropDown
} as ComponentMeta<typeof DropDown>;

const Template : ComponentStory<typeof DropDown> = args => (
    <DropDown {...args}/>
    );
    export const DropDownStory = Template.bind({});

    DropDownStory.args = {
        style: {width: "200px"},
        name: "Categories"
    }