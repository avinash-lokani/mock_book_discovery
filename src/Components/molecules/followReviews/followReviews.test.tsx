import { render, screen } from "@testing-library/react";
import FollowReviews from ".";
import Riya from "../../../../public/assets/images/person1.png"
import AnvithaSharma from "../../../../public/assets/images/person2.png"
import React from "react";

test("should render Avatar and text",() => {
    render(<FollowReviews avatar={Riya} reviewerName={"Riya"} designation={"Student"} rating={4.5} comment={"JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack"} />)
    const reviewer = screen.getByText("Riya");
    expect(reviewer).toBeInTheDocument();
});

test("should render Avatar and text",() => {
    render(<FollowReviews avatar={AnvithaSharma} reviewerName={"Anvitha Sharma"} designation={"Student"} rating={4.5} comment={"JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack"} />)
    const reviewer = screen.getByText(/Anvitha Sharma/i);
    expect(reviewer).toBeInTheDocument();
});