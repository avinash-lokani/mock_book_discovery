import * as React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookDescription from ".";
import book1 from "../../../../public/assets/images/book1.png";
import book2 from "../../../../public/assets/images/book2.png";

export default {
    title: "Molecule/BookDescription",
    component: BookDescription
} as ComponentMeta<typeof BookDescription>;

const Template : ComponentStory<typeof BookDescription> = args => (
    <BookDescription {...args}/>
    );
    export const BookDescriptionBio = Template.bind({});

    BookDescriptionBio.args = {
        bookImg: book1,
        bookTitle: "Super Simple Biology",
        bookAuthor: "By D K Hudson",
        bookCategory: "Humorous"
    }

    export const BookDescriptionPhysics = Template.bind({});

    BookDescriptionPhysics.args = {
        bookImg: book2,
        bookTitle: "Super Simple Physics",
        bookAuthor: "By D K Hudson",
        bookCategory: "Humorous"
    }