import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LandingTemplate from ".";
import LandingPageStarter from '../../molecules/landingpage';
import HomePageDetail from '../../organisms/homePageDetail';

export default {
    title: "Template/LandingTemplate",
    component: LandingTemplate
} as ComponentMeta<typeof LandingTemplate>;

const Template : ComponentStory<typeof LandingTemplate> = (args) => (
    <LandingTemplate {...args}/>
    );
    export const LandingTemplateStory = Template.bind({});

    LandingTemplateStory.args = {
        template : <LandingPageStarter/>
    }

    export const HomeTemplateStory = Template.bind({});

    HomeTemplateStory.args = {
        template : <HomePageDetail/>
    }