import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import Headline from "./headline";

describe("<Headline/>", () => {
    it("Render all components without crashing", () => {
        const { getByText, getByAltText } = render(<Headline />);
        const title = /Birthday App/i;
        const subtitle = /by Horetskyi Ltd/i;
        const imageAlt = "Cake logo"
        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(subtitle)).toBeInTheDocument();
        expect(getByAltText(imageAlt)).toBeInTheDocument();
    });
});
