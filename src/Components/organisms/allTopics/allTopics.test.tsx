import * as React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";

import AllTopic from ".";

test("should render pagination", () => {
    render(<AllTopic/>);

    const tabs = screen.getAllByRole("tab");

    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");

    fireEvent.click(tabs[1]);
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");

});