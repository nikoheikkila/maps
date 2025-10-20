import { describe, it, expect } from 'bun:test';

class TimeSeriesMap extends Map {}

describe('Time Series Map', () => {
  it('instantiates an empty map', () => {
    const map = new TimeSeriesMap();

    expect(map.size).toBe(0);
  });
});
