import { toFormalise } from './add-form-helper';
import '@testing-library/react';

describe("Name formalisator", () => {
    it("Make first letter a capital letter", () => {
        expect(toFormalise("roman")).toBe("Roman");
    });

    it("Make other letter lower-cased", () => {
        expect(toFormalise("ROMAN")).toBe("Roman");
    });
    
    it ("Return a [] if it`s not a string", () => {
        expect(toFormalise(123)).toStrictEqual([]);
    });
});
