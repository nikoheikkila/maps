type KeyFunction = () => number;

export class TimeSeriesMap<T> extends Map<number, T> {
	private readonly keyFn: KeyFunction;

	public constructor(keyFn: KeyFunction = Date.now) {
		super();

		this.keyFn = keyFn;
	}

	public add(data: T): number {
		const key = this.calculateKey();

		this.set(key, data);
		return key;
	}

	private calculateKey(): number {
		const key = this.keyFn();

		return this.has(key) ? key + 1 : key;
	}

	public latest(): T {
		this.validateEmptiness();

		const latestKey = Math.max(...this.keys());

		return this.get(latestKey)!;
	}

	private validateEmptiness() {
		if (this.size === 0) {
			throw new Error("map has no records");
		}
	}

	public earliest(): T {
		this.validateEmptiness();

		const earliestKey = Math.min(...this.keys());

		return this.get(earliestKey)!;
	}

	public all(): T[] {
		return Array.from(this.values());
	}
}
