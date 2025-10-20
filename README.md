# @nikoheikkila/maps

[![CI](https://github.com/nikoheikkila/maps/actions/workflows/ci.yml/badge.svg)](https://github.com/nikoheikkila/maps/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A TypeScript collection of specialized map implementations for time-series data and other use cases.

## Features

- **TimeSeriesMap**: A specialized Map extension for time-based data storage and retrieval
- **Type-safe**: Full TypeScript support with comprehensive type definitions
- **Lightweight**: Zero dependencies, minimal footprint
- **Modern**: Built with ES modules and supports both CommonJS and ESM
- **Well-tested**: Comprehensive test coverage with Bun's test runner

## Installation

### GitHub Packages

This package is published to GitHub Packages. To install it, you need to configure your `.npmrc` file:

```bash
# Create or update .npmrc in your project root
echo "@nikoheikkila:registry=https://npm.pkg.github.com" >> .npmrc
```

You'll also need to authenticate with GitHub Packages using a personal access token:

```bash
# Set your GitHub personal access token
export GITHUB_TOKEN="your_personal_access_token_here"
npm config set //npm.pkg.github.com/:_authToken ${GITHUB_TOKEN}
```

Then install the package:

```bash
# Using npm
npm install @nikoheikkila/maps

# Using yarn
yarn add @nikoheikkila/maps

# Using bun
bun add @nikoheikkila/maps
```

### Authentication Setup

To use packages from GitHub Packages, you need a GitHub personal access token with `read:packages` permission:

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Create a new token with `read:packages` scope
3. Configure your environment as shown above

## Usage

### TimeSeriesMap

A specialized Map that extends JavaScript's native Map with time-series specific functionality:

```typescript
import { TimeSeriesMap } from '@nikoheikkila/maps';

// Create a new time series map
const tsMap = new TimeSeriesMap<string>();

// Add data (keys are automatically generated using timestamps)
const key1 = tsMap.add('first value');
const key2 = tsMap.add('second value');
const key3 = tsMap.add('third value');

// Retrieve the latest entry
const latest = tsMap.latest(); // 'third value'

// Retrieve the earliest entry
const earliest = tsMap.earliest(); // 'first value'

// Get all values as an array
const allValues = tsMap.all(); // ['first value', 'second value', 'third value']

// Use with custom key generation function
let counter = 0;
const customTsMap = new TimeSeriesMap<number>(() => ++counter);

customTsMap.add(100); // key: 1
customTsMap.add(200); // key: 2
customTsMap.add(300); // key: 3
```

### Custom Key Functions

By default, `TimeSeriesMap` uses `Date.now()` for key generation, but you can provide your own:

```typescript
// Using a custom incrementing counter
let id = 0;
const counterMap = new TimeSeriesMap<string>(() => ++id);

// Using high-resolution time
const hrMap = new TimeSeriesMap<string>(() => 
  performance.now()
);

// Using random numbers (not recommended for production)
const randomMap = new TimeSeriesMap<string>(() => 
  Math.floor(Math.random() * 1000000)
);
```

### Error Handling

`TimeSeriesMap` throws errors when trying to access data from an empty map:

```typescript
const emptyMap = new TimeSeriesMap<string>();

try {
  const latest = emptyMap.latest();
} catch (error) {
  console.error(error.message); // "map has no records"
}

try {
  const earliest = emptyMap.earliest();
} catch (error) {
  console.error(error.message); // "map has no records"
}
```

## API Reference

### TimeSeriesMap<T>

Extends `Map<number, T>` with additional time-series methods.

#### Constructor

- `new TimeSeriesMap<T>(keyFn?: () => number)`
  - `keyFn`: Optional key generation function (defaults to `Date.now`)

#### Methods

- `add(data: T): number` - Adds data to the map and returns the generated key
- `latest(): T` - Returns the value with the highest key (throws if empty)
- `earliest(): T` - Returns the value with the lowest key (throws if empty)
- `all(): T[]` - Returns all values as an array in insertion order

#### Inherited Methods

All standard `Map` methods are available:
- `get(key: number): T | undefined`
- `set(key: number, value: T): this`
- `has(key: number): boolean`
- `delete(key: number): boolean`
- `clear(): void`
- `size: number`
- And all other Map methods...

## Development

### Prerequisites

- [Bun](https://bun.com) v1.0.0 or higher
- Node.js 18+ (for compatibility testing)

### Setup

```bash
# Clone the repository
git clone https://github.com/nikoheikkila/maps.git
cd maps

# Install dependencies
bun install
```

### Available Scripts

```bash
# Build the package
bun run build

# Run tests
bun test

# Run tests with coverage
bun run test:coverage

# Lint and format code
bun run lint
bun run format

# Clean build artifacts
bun run clean
```

### Building

The build process creates multiple output formats:

- `dist/index.js` - CommonJS bundle
- `dist/index.mjs` - ES module bundle
- `dist/index.d.ts` - TypeScript definitions
- Source maps for debugging

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Author

**Niko Heikkilä** - [nikoheikkila](https://github.com/nikoheikkila)

---

*Built with [Bun](https://bun.com) 🥟*
