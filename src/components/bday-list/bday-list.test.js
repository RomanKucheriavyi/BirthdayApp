import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import BdayList from "../bday-list/bday-list";




const vis = jest.fn();
describe ("render", () => {
    it("Render all components without crashing", () => {
        render(<BdayList bdayData = {[]} onDelete = {()=>{}} />);
        
    });
});