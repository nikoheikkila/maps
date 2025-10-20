import {describe, expect, it} from 'bun:test';

type KeyFunction = () => number;

class TimeSeriesMap<T> extends Map<number, T> {
  private readonly keyFn: KeyFunction;

  public constructor(keyFn: KeyFunction = Date.now) {
    super();

    this.keyFn = keyFn;
  }

  public add(data: T): number {
    const key = this.keyFn();
    this.set(key, data);
    return key;
  }

  public latest(): T | undefined {
    if (this.size === 0) {
      throw new Error('map has no records');
    }

    const latestKey = Array.from(this.keys()).at(0);

    return this.get(latestKey!);
  }
}

describe('Time Series Map', () => {
  it('instantiates an empty map', () => {
    const map = new TimeSeriesMap();

    expect(map.size).toBe(0);
  });

  it('adds a new record and returns the key', () => {
    const expectedKey = 1;
    const expectedValue = 'data';
    const map = new TimeSeriesMap(() => expectedKey);

    const key = map.add(expectedValue);

    expect(key).toBe(expectedKey);
    expect(map.get(key)).toBe(expectedValue);
  });

  it('clears the map', () => {
    const map = new TimeSeriesMap();
    map.add('data');

    map.clear();

    expect(map.size).toBe(0);
  });

  it('retrieves the latest record', () => {
    const map = new TimeSeriesMap();
    map.add('data1');
    map.add('data2');

    const latest = map.latest();

    expect(latest).toBe('data2');
  });

  it('throws error when retrieving latest record from an empty map', () => {
    const map = new TimeSeriesMap();

    expect(() => map.latest()).toThrow(/map has no records/i);
  })
});
