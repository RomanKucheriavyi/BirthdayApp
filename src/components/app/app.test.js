import React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../app/app";

describe('App', () => {
    test('renders App component', async () => {
        render(<App />);

        expect(screen.getByText("sosi loh")).toBeInTheDocument();
    });
});

