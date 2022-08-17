import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookPagination from ".";

export default {
    title: "Molecule/BookPagination",
    component: BookPagination
} as ComponentMeta<typeof BookPagination>;

const Template : ComponentStory<typeof BookPagination> = args => (
    <BookPagination {...args}/>
    );
    export const PaginationStory = Template.bind({});

    PaginationStory.args = {
        style: {backgroundColor: "red"},
        onClick:() => console.log("pagination")
    }
