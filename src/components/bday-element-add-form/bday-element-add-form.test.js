import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import BdayElementAddForm from "./bday-element-add-form";

const onSubmit = jest.fn();
const {getByPlaceholderText, getByTestId, getByRole, queryByText, findByText} = screen;
const {change, click}= fireEvent;

describe("<BdayElementAddForm />", () => {
    it("Render all components without crashing", () => {
        render(<BdayElementAddForm />);
        
        expect(getByPlaceholderText("Name")).toBeInTheDocument();
        expect(getByPlaceholderText("Surname")).toBeInTheDocument();
        expect(getByTestId("input-date")).toBeInTheDocument();
        expect(getByRole('button', {name: /add/i}));
    });

    it("calls onSubmit function only one time with valid inputs", () => {
        render(<BdayElementAddForm onAdd = {onSubmit} />);

        expect(queryByText(/name is too short/i)).toBeNull();
        expect(queryByText(/surname is too short/i)).toBeNull();
        expect(queryByText(/date is invalid/i)).toBeNull();
        change(getByPlaceholderText("Name"), {target: {value: "Grh"}});
        change(getByPlaceholderText("Surname"), {target: {value: "Goroh"}});
        change(getByTestId("input-date"), {target: {value: "2011-11-11"}});

        click(getByRole('button', {
            name: /add/i
        }));

        expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    it("invalid name, renders name validation error, don`t allow to submit", async () => {
        render(<BdayElementAddForm onAdd = {onSubmit}/>);

        expect(queryByText(/name is too short/i)).toBeNull();
        expect(queryByText(/surname is too short/i)).toBeNull();
        expect(queryByText(/date is invalid/i)).toBeNull();
        change(getByPlaceholderText("Name"), {target: {value: "Gr"}});  
        change(getByPlaceholderText("Surname"), {target: {value: "Goroh"}});
        change(getByTestId("input-date"), {target: {value: "2011-11-11"}});

        expect(await findByText(/name is too short/i)).toBeInTheDocument();

        click(getByRole('button', {
            name: /add/i
        }));
        expect(onSubmit).not.toHaveBeenCalled();
    });



    it("invalid surname, renders surname validation error, don`t allow to submit", async () => {
        render(<BdayElementAddForm onAdd = {onSubmit}/>);

        expect(queryByText(/name is too short/i)).toBeNull();
        expect(queryByText(/surname is too short/i)).toBeNull();
        expect(queryByText(/date is invalid/i)).toBeNull();
        change(getByPlaceholderText("Name"), {target: {value: "Grh"}});  
        change(getByPlaceholderText("Surname"), {target: {value: "Go"}});
        change(getByTestId("input-date"), {target: {value: "2011-11-11"}});

        expect(await findByText(/surname is too short/i)).toBeInTheDocument();

        click(getByRole('button', {
            name: /add/i
        }));
        expect(onSubmit).not.toHaveBeenCalled();
    });

    it("invalid date, renders date validation error, don`t allow to submit", async () => {
        render(<BdayElementAddForm onAdd = {onSubmit}/>);

        expect(queryByText(/name is too short/i)).toBeNull();
        expect(queryByText(/surname is too short/i)).toBeNull();
        expect(queryByText(/date is invalid/i)).toBeNull();
        change(getByPlaceholderText("Name"), {target: {value: "Grh"}});  
        change(getByPlaceholderText("Surname"), {target: {value: "Goroh"}});
        change(getByTestId("input-date"), {target: {value: "2211-11-11"}});

        expect(await findByText(/date is invalid/i)).toBeInTheDocument();

        click(getByRole('button', {
            name: /add/i
        }));
        expect(onSubmit).not.toHaveBeenCalled();
    });

    it("incomplete date, don`t renders date validation error, don`t allow to submit", async () => {
        render(<BdayElementAddForm onAdd = {onSubmit}/>);

        expect(queryByText(/name is too short/i)).toBeNull();
        expect(queryByText(/surname is too short/i)).toBeNull();
        expect(queryByText(/date is invalid/i)).toBeNull();
        change(getByPlaceholderText("Name"), {target: {value: "Grh"}});  
        change(getByPlaceholderText("Surname"), {target: {value: "Goroh"}});
        change(getByTestId("input-date"), {target: {value: "2011-11-"}});

        expect(queryByText(/date is invalid/i)).toBeNull();

        click(getByRole('button', {
            name: /add/i
        }));
        expect(onSubmit).not.toHaveBeenCalled();
    });
});
