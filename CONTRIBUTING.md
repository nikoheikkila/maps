# Contributing to @nikoheikkila/maps

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🚀 Development Setup

### Prerequisites

- [Bun](https://bun.com) v1.0.0 or higher
- [Git](https://git-scm.com/)
- A [GitHub account](https://github.com)

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/maps.git
   cd maps
   ```
3. **Install dependencies**:
   ```bash
   bun install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Workflow

### Available Scripts

```bash
# Install dependencies
bun install

# Run tests
bun test

# Run tests with coverage
bun run test:coverage

# Build the package
bun run build

# Lint code (check only)
bun run lint

# Format code (auto-fix)
bun run format

# Clean build artifacts
bun run clean
```

### Code Quality Standards

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

- **Indentation**: Tabs (4 spaces width)
- **Quotes**: Double quotes
- **Semicolons**: Required
- **Line endings**: LF (Unix)

Run `bun run format` to automatically format your code according to these standards.

## 🧪 Testing

### Writing Tests

- Tests are located in the `tests/` directory
- Use Bun's built-in test runner
- Test files should end with `.test.ts` or `.spec.ts`
- Follow the existing test structure and naming conventions

### Test Requirements

- All new features must include comprehensive tests
- Bug fixes should include regression tests
- Aim for high test coverage (>90%)
- Tests should be deterministic and not rely on external resources

### Running Tests

```bash
# Run all tests
bun test

# Run tests with coverage
bun run test:coverage

# Run specific test file
bun test tests/timeseries.test.ts

# Run tests in watch mode (if supported)
bun test --watch
```

## 📝 Code Style

### TypeScript Guidelines

- Use strict TypeScript settings
- Prefer explicit types over `any`
- Use generics for reusable components
- Follow existing naming conventions:
  - Classes: PascalCase
  - Methods/variables: camelCase
  - Constants: UPPER_SNAKE_CASE
  - Types/interfaces: PascalCase

### Documentation

- Add JSDoc comments for public APIs
- Include examples in documentation
- Update README.md for new features
- Keep inline comments concise and meaningful

## 📋 Pull Request Process

### Before Submitting

1. **Ensure all tests pass**:
   ```bash
   bun test
   ```

2. **Lint and format your code**:
   ```bash
   bun run format
   bun run lint
   ```

3. **Build the package successfully**:
   ```bash
   bun run build
   ```

4. **Update documentation** if needed

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat: add collision handling to TimeSeriesMap
fix: resolve memory leak in map cleanup
docs: update installation instructions
test: add coverage for error conditions
```

### Pull Request Guidelines

1. **Create a descriptive PR title** following conventional commits
2. **Fill out the PR template** (if provided)
3. **Reference related issues** using `Fixes #123` or `Closes #123`
4. **Keep PRs focused** - one feature/fix per PR
5. **Add screenshots/examples** for UI changes
6. **Be responsive** to feedback and review comments

## 🐛 Issue Reporting

### Bug Reports

When reporting bugs, please include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected vs actual behavior**
- **Environment details** (Bun version, OS, etc.)
- **Code samples** that demonstrate the issue
- **Error messages** with full stack traces

### Feature Requests

For feature requests, please provide:

- **Clear description** of the proposed feature
- **Use case** and motivation
- **Proposed API** (if applicable)
- **Alternative solutions** considered
- **Willingness to implement** the feature

## 🚢 Release Process

Releases are managed by the maintainers using GitHub Actions:

1. Version bumps follow [Semantic Versioning](https://semver.org/)
2. Releases are triggered by git tags (`v*`)
3. Packages are published to GitHub Packages
4. Release notes are automatically generated

## 🏛️ Project Structure

```
├── src/                 # Source code
│   ├── index.ts        # Main entry point
│   └── timeseries.ts   # TimeSeriesMap implementation
├── tests/              # Test files
├── dist/               # Build output (generated)
├── .github/            # GitHub Actions workflows
├── package.json        # Package configuration
├── tsconfig.json       # TypeScript config (development)
├── tsconfig.build.json # TypeScript config (build)
├── biome.json          # Biome configuration
└── README.md           # Main documentation
```

## 🤝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for all contributors, regardless of:

- Age, body size, disability, ethnicity
- Gender identity and expression
- Level of experience, education, socio-economic status
- Nationality, race, religion, sexual orientation

### Expected Behavior

- Be respectful and constructive in discussions
- Focus on what is best for the community
- Show empathy towards other community members
- Give and gracefully accept constructive feedback

### Unacceptable Behavior

- Harassment, discrimination, or personal attacks
- Trolling, insulting comments, or political attacks
- Publishing others' private information
- Any conduct inappropriate in a professional setting

## 📞 Getting Help

- **Documentation**: Check the [README.md](./README.md) first
- **Issues**: Search existing [GitHub Issues](https://github.com/nikoheikkila/maps/issues)
- **Discussions**: Use [GitHub Discussions](https://github.com/nikoheikkila/maps/discussions) for questions
- **Contact**: Reach out to [@nikoheikkila](https://github.com/nikoheikkila) for maintainer questions

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

---

Thank you for contributing to @nikoheikkila/maps! 🎉