import { describe, expect, test } from "vitest";
import problem01 from "../../01-50/01-10/01.js";
import problem02 from "../../01-50/01-10/02.js";
import problem03 from "../../01-50/01-10/03.js";
import problem04 from "../../01-50/01-10/04.js";
import problem05 from "../../01-50/01-10/05.js";
import problem06 from "../../01-50/01-10/06.js";
import problem07 from "../../01-50/01-10/07.js";
import problem08 from "../../01-50/01-10/08.js";
import problem09 from "../../01-50/01-10/09.js";
import problem10 from "../../01-50/01-10/10.js";

describe("1-10", () => {
    test("1", () => {
        expect(problem01).toBe(233168);
    });
    test("2", () => {
        expect(problem02).toBe(4613732);
    });
    test("3", () => {
        expect(problem03).toBe(6857);
    });
    test("4", () => {
        expect(problem04).toBe(906609);
    });
    test("5", () => {
        expect(problem05).toBe(232792560);
    });
    test("6", () => {
        expect(problem06).toBe(25164150);
    });
    test("7", () => {
        expect(problem07).toBe(104743);
    });
    test("8", () => {
        expect(problem08).toBe(23514624000);
    });
    test("9", () => {
        expect(problem09).toBe(31875000);
    });
    test("10", () => {
        expect(problem10).toBe(142913828922);
    });
});
