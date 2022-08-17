import * as React from 'react';
import { getByRole, render, screen, waitFor } from "@testing-library/react";
import DropDown from ".";
import UserEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("should render Dropdown", async() => {
    render(<DropDown name={"Categories"}/>);
    UserEvent.click(getByRole(screen.getByTestId("select"), "button"));
    await waitFor(() => UserEvent.click(screen.getByText(/Biology/i)));
    expect(screen.getByTestId("select")).toHaveTextContent(/Biology/i);
});