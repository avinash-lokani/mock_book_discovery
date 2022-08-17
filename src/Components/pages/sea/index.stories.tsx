import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import LibraryPage from '.';

export default {
	title: 'Pages/Library',
	component: LibraryPage,
} as ComponentMeta<typeof LibraryPage>;

const Template: ComponentStory<typeof LibraryPage> = (args) => (
	<LibraryPage {...args} />
);

export const LibraryPageStory = Template.bind({});

LibraryPageStory.args = {};
