import * as React from 'react';
import { render, screen } from "@testing-library/react";
import LandingTemplate from ".";
import LandingPageStarter from '../../molecules/landingpage';

test("should render LandingTemplate", () => {

    render(<LandingTemplate template={<LandingPageStarter/>} />);

    expect(screen.getByText("Personalized Learning Journeys")).toBeInTheDocument();
    expect(screen.getByText("Learning journeys mapped and recommended based on your grade, learning need and speed.")).toBeInTheDocument();
    expect(screen.getByText("Start your Journey")).toBeInTheDocument();
});