import { getOrdinalNumber, getDaysToBday, validateDate } from './date-helper';
import '@testing-library/react';

describe("Get ordinal numbers", () => {
    it("Make st suffix", () => {
        expect(getOrdinalNumber(21)).toBe("21-st");
    });

    it("Make nd suffix", () => {
        expect(getOrdinalNumber(22)).toBe("22-nd");
    });

    it("Make rd suffix", () => {
        expect(getOrdinalNumber(23)).toBe("23-rd");
    });

    it("Make th suffix", () => {
        expect(getOrdinalNumber(13)).toBe("13-th");
    });

    it("Make another th suffix", () => {
        expect(getOrdinalNumber(8)).toBe("8-th");
    });

    it("And another one th suffix", () => {
        expect(getOrdinalNumber(19)).toBe("19-th");
    });

    it("Return a [] if it`s not a number", () => {
        expect(getOrdinalNumber([19])).toStrictEqual([]);
    });
});

describe("Get days to bday(current date: 2021-12-06)", () => {
    it("In this month will be", () => {
        expect(getDaysToBday("2011-12-7")).toBe("0");
    });

    it("In this month was", () => {
        expect(getDaysToBday("2011-12-1")).toBe("359");
    });

    it("Will be in next month", () => {
        expect(getDaysToBday("2011-1-15")).toBe("39");
    });

    it("Was month ago", () => {
        expect(getDaysToBday("2011-11-15")).toBe("343");
    });

    it("Return a [] if it`s not a string", () => {
        expect(getDaysToBday(2011-11-15)).toStrictEqual([]);
    });
});

describe("Date of birthday validation", () => {
    it("Date is out of min range", () => {
        expect(validateDate("1899-12-31")).toBe(false);
    });

    it("Date is out of max range", () => {
        expect(validateDate("2022-12-7")).toBe(false);
    });

    it("Date in range", () => {
        expect(validateDate("2010-12-7")).toBe(true);
    });

    it("Return a [] if it`s not a string", () => {
        expect(validateDate(undefined)).toStrictEqual([]);
    });
});