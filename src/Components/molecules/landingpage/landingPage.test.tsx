import * as React from 'react';
import { render, screen } from "@testing-library/react";
import LandingPageStarter from ".";

test("should render LandingPageStarter", () => {

    render(<LandingPageStarter />);

    expect(screen.getByText("Personalized Learning Journeys")).toBeInTheDocument();
    expect(screen.getByText("Learning journeys mapped and recommended based on your grade, learning need and speed.")).toBeInTheDocument();
    expect(screen.getByText("Start your Journey")).toBeInTheDocument();
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'image');
});