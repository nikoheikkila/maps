# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

**Package Management:**
```bash
bun install                    # Install dependencies
```

**Development:**
```bash
bun run index.ts              # Run the main entry point
```

**Code Quality:**
```bash
bunx biome check              # Lint and format check
bunx biome check --write      # Auto-fix linting and formatting issues (also available as `bun format`)
```

**Testing:**
```bash
bun test                      # Run all tests
bun test <pattern>            # Run specific test files matching pattern
bun test --test-name-pattern <regex>  # Run tests matching name pattern
bun test --coverage           # Run tests with coverage report
bun test --watch              # Run tests in watch mode (if available)
```

## Architecture Overview

This is a TypeScript library built with Bun that provides specialized data structures for time-based operations.

**Core Structure:**
- `src/timeseries.ts` - Main `TimeSeriesMap<T>` class that extends JavaScript's native Map
- `index.ts` - Root barrel export that re-exports from `src/index.ts`
- `src/index.ts` - Internal barrel export for the timeseries module

**Key Components:**

**TimeSeriesMap Class:**
- Extends native `Map<number, T>` with time-series specific functionality
- Uses injectable key generation function (defaults to `Date.now`)
- Provides collision handling by incrementing keys when duplicates occur
- Methods: `add()`, `latest()`, `earliest()`, `all()`
- Validation: Throws errors when accessing empty maps

**Type System:**
- Generic `TimeSeriesMap<T>` supports any value type
- Private `KeyFunction` type for timestamp generators
- Uses strict TypeScript configuration with `noUncheckedIndexedAccess`

## Development Environment

**Runtime:** Bun v1.2.22+ (JavaScript runtime and package manager)
**Language:** TypeScript with ES modules
**Formatting:** Biome with tab indentation and double quotes
**Testing:** Bun's built-in test runner

**Key Configuration:**
- TypeScript target: ESNext with bundler module resolution
- Biome configured for tabs, double quotes, organize imports
- Non-null assertions disabled in linting
- Coverage reports generated to `coverage/` directory