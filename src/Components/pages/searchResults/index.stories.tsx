import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SearchResultsPage from ".";

export default {
    title: 'Page/Search Results Page',
    component: SearchResultsPage
}as ComponentMeta<typeof SearchResultsPage>

const Template: ComponentStory<typeof SearchResultsPage> = (args) => (
    <SearchResultsPage {...args} />
)

export const SearchResults = Template.bind({});

