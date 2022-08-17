import * as React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomePage from "."

export default {
    title: "Page/HomePage",
    component: HomePage
} as ComponentMeta<typeof HomePage>;

const Template : ComponentStory<typeof HomePage> = () => (
    <HomePage/>
    );
    export const HomePageStory = Template.bind({});
