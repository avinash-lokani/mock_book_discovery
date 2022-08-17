import { fireEvent, render, screen } from "@testing-library/react";
import List from ".";
import React from "react";
import Maths from "../../../../public/assets/icons/maths.svg";
import Social from "../../../../public/assets/icons/social.svg"

test("should render AllTopics icon and text", () => {
    const handleClick = jest.fn();
    render(<List icon={Maths} Subject={"Mathematics"} topic_1={"Algebra & linear algebra"} topic_2={"Calculus"} topic_3={"Statistics & Logistics"} topic_4={"Trignometry"} style={{ backgroundColor: "#FFF8E7", height: "36px", width: "36px" }} onClick = {handleClick} iconStyle={{color : "#04D387",margin: "5px 5px 5px 5px",height: "24px",width:"24px"}}/>)

    const list = screen.getByTestId("list");

    const list1 = screen.getByTestId("list1");
    const list2 = screen.getByTestId("list2");
    const list3 = screen.getByTestId("list3");

    fireEvent.click(list);
    fireEvent.click(list1);
    fireEvent.click(list2);
    fireEvent.click(list3);
    expect(handleClick).toBeCalled();
    
    const subjectElement = screen.getByText("Mathematics");
    const topicElement1 = screen.getByText("Algebra & linear algebra");
    const topicElement2 = screen.getByText("Calculus");
    const topicElement3 = screen.getByText("Statistics & Logistics");
    const topicElement4 = screen.getByText("Trignometry")
    expect(subjectElement).toBeInTheDocument();
    expect(topicElement1).toBeInTheDocument();
    expect(topicElement2).toBeInTheDocument();
    expect(topicElement3).toBeInTheDocument();
    expect(topicElement4).toBeInTheDocument();
    expect(screen.getByRole("icon")).toBeInTheDocument();
   
})

test("should render AllTopics icon and text", () => {
    render(<List icon={Social} Subject={"Social Science"} topic_1={"History"} topic_2={"Geography, maps & atlas"} topic_3={"Civics & economics"} topic_4={"Psychology"} style={{ backgroundColor: "#E7FFF6", height: "36px", width: "36px" }} iconStyle={{color : "#04D387",margin: "5px 5px 5px 5px",height: "24px",width:"24px"}}/>)
    const subjectElement = screen.getByText("Social Science");
    const topicElement1 = screen.getByText("History");
    const topicElement2 = screen.getByText("Geography, maps & atlas");
    const topicElement3 = screen.getByText("Civics & economics");
    const topicElement4 = screen.getByText("Psychology")
    expect(subjectElement).toBeInTheDocument();
    expect(topicElement1).toBeInTheDocument();
    expect(topicElement2).toBeInTheDocument();
    expect(topicElement3).toBeInTheDocument();
    expect(topicElement4).toBeInTheDocument();
    expect(screen.getByRole("icon")).toBeInTheDocument();
   
})