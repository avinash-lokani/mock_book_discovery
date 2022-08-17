import { render, screen } from "@testing-library/react";
import Review from ".";
import Radha from "../../../../public/assets/images/reviewer_1.png";
import React from "react";
import Mira from "../../../../public/assets/images/reviewer_2.png"

test("should render Avatar and text",() => {
    render(<Review avatar={Radha} reviewerName={"Radha"} designation={"Proffesor at Harvard University"} rating={4.5} comment={"Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the "} />)
    const reviewer = screen.getByText(/Radha/i);
    expect(reviewer).toBeInTheDocument();
});

test("should render Avatar and text",() => {
    render(<Review avatar={Mira} reviewerName={"Mira"} designation={"Proffesor at Harvard University"} rating={4.5} comment={"Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the "} />)
    const reviewer = screen.getByText(/Mira/i);
    expect(reviewer).toBeInTheDocument();
});