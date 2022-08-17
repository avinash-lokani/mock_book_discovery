import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LandingPageStarter from ".";

export default {
    title: "Molecule/LandingPageStarter",
    component: LandingPageStarter
} as ComponentMeta<typeof LandingPageStarter>;

const Template : ComponentStory<typeof LandingPageStarter> = () => (
    <LandingPageStarter/>
    );
    export const LandingPageStarterStory = Template.bind({});