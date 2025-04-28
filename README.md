# Workflow Repository

This repository contains the implementation of a course assignment focused on applying modern development workflow practices and tools to enhance website quality and development efficiency.

## Project Overview

This project demonstrates best practices in front-end development workflows, including:
- Automated testing strategies
- Code quality enforcement
- Git workflow practices


## Objectives

- Set up and configure code quality tools (ESLint and Prettier) to ensure consistent code style
- Implement commit hooks to automatically check and format code before commits
- Configure Vitest for unit testing key utility functions (`isActivePath` and `getUserName`)
- Set up Playwright for end-to-end testing of critical user flows (login functionality and navigation)
- Enhance project documentation for easier onboarding and development

## Prerequisites

- Node.js (latest LTS version recommended)
- npm

## Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/workflow-repo.git
   cd workflow-repo
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   # Required environment variables 
   # TEST_USER_EMAIL=your-test-email@stud.noroff.no
   # TEST_USER_PASSWORD=your-test-password
   ```

## Available Scripts

- **Start the development server**
  ```bash
   npm run start
   ```
   This runs a live server on port 5501.

- **Run Tailwind CSS in watch mode**
  ```bash
  npm run dev
  ```
  This watches for changes in your CSS files and compiles Tailwind CSS.

- **Run tests**
  ```bash
  npm run test
  ```
  This runs unit tests using Vitest.

- **Run Playwright tests**
  ```bash
  npx playwright test
  ```
  This runs end-to-end tests with Playwright.

## Testing

### Unit Testing with Vitest
Unit tests focus on key utility functions:
- `isActivePath` - Validates the current navigation path
- `getUserName` - Handles user information retrieval

Run unit tests with:
```bash
npm run test
```

### End-to-End Testing with Playwright
E2E tests cover critical user flows:
- Login functionality
- Navigation between pages

Playwright tests run across multiple browsers:
- Chromium
- Firefox
- Safari

Run E2E tests with:
```bash
npx playwright test
```

To view the Playwright HTML test report:
```bash
npx playwright show-report
```

## Code Quality Tools

### ESLint
ESLint is configured to enforce code quality standards and catch potential issues early.

### Prettier
Prettier ensures consistent code formatting across the project.

### Husky and lint-staged
Pre-commit hooks automatically run linting and formatting on staged files before each commit:
- JavaScript files are formatted with Prettier and linted with ESLint
- HTML files are formatted with Prettier

## Development Server

The project runs on `http://localhost:5501` during development.

## Git Workflow

This project follows a branch-based Git workflow:
1. Development work is done in a dedicated `workflow` branch
2. Changes are submitted via pull request to the main branch
3. Code reviews are conducted before merging
