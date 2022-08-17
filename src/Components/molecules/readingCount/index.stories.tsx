import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import booksread from "../../../../public/assets/icons/bookread.svg"
import ReadingCount from ".";


export default {
    title: "Molecule/ReadingCount",
    component: ReadingCount
} as ComponentMeta<typeof ReadingCount>;

const Template : ComponentStory<typeof ReadingCount> = (args) => (
    <ReadingCount {...args}/>
    );
    export const ReadingCountStory = Template.bind({});

ReadingCountStory.args = {
    heading:'CURRENT READ',
     iconImg : booksread,
     count: 58
}