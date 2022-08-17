import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookLogo from ".";


export default {
    title: "Atom/Logo",
    component: BookLogo
} as ComponentMeta<typeof BookLogo>;

const Template : ComponentStory<typeof BookLogo> = args => (
    <BookLogo {...args}/>
    );
    export const BrandLogo = Template.bind({});

    BrandLogo.args = {
        style: {backgroundColor: "black"}
    }