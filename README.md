# Playwright E2E Automation

A personal project where I practice web UI test automation using Playwright and TypeScript.

I'm using [Automation Exercise](https://automationexercise.com/) as the testing website and working through its test cases to get more hands-on experience with browser automation.

## What I'm Working On

The project covers common user activities, such as:

- User registration and login
- Form submission
- Page navigation
- Product listing and search
- Shopping cart functionality
- Subscription forms

I'm gradually adding more test cases as I work through the scenarios.

## Tools & Technologies

- **Playwright** – Browser automation
- **TypeScript** – Writing test scripts
- **Node.js & npm** – Project runtime and package management
- **Git & GitHub** – Version control

## Project Structure

```text
playwright-e2e-automation/
├── features/       # Gherkin test scenarios
├── pages/ui/       # Page Object classes
├── tests/ui/       # Playwright test scripts
├── test-data/      # Test data and sample files
├── utils/          # Reusable helper functions
├── playwright.config.ts
├── package.json
└── README.md
```

## How the Tests Are Organized

I'm using the Page Object Model (POM) to keep page locators and interactions separate from test scenarios.

Each test follows the Arrange-Act-Assert (AAA) pattern:

- **Arrange:** Set up the test.
- **Act:** Perform actions on the website.
- **Assert:** Check whether the expected result is correct.

I also keep Gherkin feature files as documentation for the test scenarios. They are not executed using Cucumber.

## Test Scenarios

| Test Cases  | Description                                       |
| ----------- | ------------------------------------------------- |
| TC001–TC005 | Registration, login, logout, and login validation |
| TC006       | Contact Us form                                   |
| TC007       | Test Cases page navigation                        |
| TC008       | Product listing and product details               |
| TC009       | Search products                                   |
| TC010–TC011 | Subscription on Home and Cart pages               |
| TC012       | Add multiple products to Cart                     |
| TC013       | Verify product quantity in Cart (in progress)     |

More scenarios will be added as I continue working through the test cases.

## Getting Started

### Requirements

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/tedyirwa/playwright-e2e-automation.git
cd playwright-e2e-automation
```

Install dependencies:

```bash
npm install
npx playwright install chromium
```

### Run Tests

Run all tests:

```bash
npm test
```

Run a specific test file:

```bash
npm test -- tests/ui/products.spec.ts
```

Open the HTML report:

```bash
npx playwright show-report
```

## Notes

This is an ongoing project. I'm using it to improve my understanding of Playwright, TypeScript, test design, locator strategies, and debugging through hands-on practice.

## Author

**Muhammad Tedy Irwansyah**

GitHub: [tedyirwa](https://github.com/tedyirwa)
