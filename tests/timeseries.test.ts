import { beforeEach, describe, expect, it } from "bun:test";
import { TimeSeriesMap } from "..";

describe("Time Series Map", () => {
	let map: TimeSeriesMap<string>;

	beforeEach(() => {
		map = new TimeSeriesMap();
	});

	it("instantiates an empty map", () => {
		expect(map.size).toBe(0);
	});

	it("adds a new record and returns the key", () => {
		const expectedKey = 1;
		const expectedValue = "data";
		const map = new TimeSeriesMap(() => expectedKey);

		const key = map.add(expectedValue);

		expect(key).toBe(expectedKey);
		expect(map.get(key)).toBe(expectedValue);
	});

	it("clears the map", () => {
		map.add("data");

		map.clear();

		expect(map.size).toBe(0);
	});

	it("retrieves the latest record", () => {
		map.add("data1");
		map.add("data2");
		map.add("data3");

		const latest = map.latest();

		expect(latest).toBe("data3");
	});

	it("throws error when retrieving latest record from an empty map", () => {
		expect(() => map.latest()).toThrow(/map has no records/i);
	});

	it("retrieves the earliest record", () => {
		map.add("data1");
		map.add("data2");
		map.add("data3");

		expect(map.earliest()).toBe("data1");
	});

	it("throws error when retrieving earliest record from an empty map", () => {
		expect(() => map.earliest()).toThrow(/map has no records/i);
	});

	it("retrieves all records", () => {
		map.add("data1");
		map.add("data2");

		expect(map.all()).toStrictEqual(["data1", "data2"]);
	});
});
