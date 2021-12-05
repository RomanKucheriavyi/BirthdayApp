import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./app";

describe("<App/>", () => {
    it("Renders without crashing", () => {
        const { getByText } = render(<App />);
        expect(getByText(/Birthday App/i)).toBeInTheDocument();
    });
});

