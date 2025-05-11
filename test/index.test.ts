import { describe, expect, test } from "vitest";
import { helloWorld } from "../src/index";

describe("helloWorld function", () => {
	test("returns the expected string", () => {
		expect(helloWorld()).toBe("Helloooo, World!");
	});

	test("does not throw any errors", () => {
		expect(() => helloWorld()).not.toThrow();
	});
});
