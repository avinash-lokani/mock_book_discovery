import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {BrowserRouter} from "react-router-dom"
import BookCard from ".";

export default {
    title: "Organism/BookCard",
    component: BookCard
} as ComponentMeta<typeof BookCard>;

const Template : ComponentStory<typeof BookCard> = () => (
    <BrowserRouter> 
    <BookCard searchInput={'J D Lee'} allBookData={[]}/>
    </BrowserRouter>
    );
    export const BookCardStory = Template.bind({});
