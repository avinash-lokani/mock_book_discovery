import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Library from '.';

test('should render HomePage', () => {
	render(<Library />);

	const libraryText = screen.getByText(/My Library/i);
	expect(libraryText).toBeInTheDocument();

	const home = screen.getByText(/Home/i);
	expect(home).toBeInTheDocument();
});
