# Playwright E2E Automation

A UI End-to-End (E2E) test automation project built with **Playwright and TypeScript**, using [Automation Exercise](https://automationexercise.com/) as the application under test.

This project demonstrates practical test automation skills through realistic user scenarios, maintainable test architecture, and automated browser interactions.

## Project Objectives

- Build maintainable UI automation tests using Playwright.
- Apply the Page Object Model (POM) design pattern.
- Organize test scenarios using the Arrange-Act-Assert (AAA) pattern.
- Validate critical user journeys and application behavior.
- Practice debugging, locator strategies, and automated test reporting.

## Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | Browser automation and E2E testing |
| TypeScript | Test implementation |
| Node.js | JavaScript runtime |
| npm | Dependency management |
| Git & GitHub | Version control and source code management |

## Testing Application

**Application:** [Automation Exercise](https://automationexercise.com/)

The project uses the website's public interface to practice functional UI testing across authentication, navigation, product management, and shopping cart workflows.

## Project Architecture

The project follows the **Page Object Model (POM)** design pattern.

- **Page Objects:** Encapsulate page locators and reusable interactions.
- **Test Specifications:** Contain test scenarios, execution flow, and assertions.
- **Feature Files:** Document test scenarios using Gherkin syntax. These files serve as documentation and are not executed through Cucumber.

Tests are organized using the Arrange-Act-Assert (AAA) approach:

1. **Arrange:** Prepare the browser and test prerequisites.
2. **Act:** Perform user interactions.
3. **Assert:** Verify expected application behavior.

## Project Structure

```text
playwright-e2e-automation/
│
├── features/
│   ├── user-authentication.feature
│   ├── contact-us.feature
│   ├── navigation.feature
│   ├── products.feature
│   └── subscription.feature
│
├── pages/
│   └── ui/
│       ├── HomePage.ts
│       ├── AuthPage.ts
│       ├── AccountInformationPage.ts
│       ├── AccountCreatedPage.ts
│       ├── AccountDeletedPage.ts
│       ├── ContactUsPage.ts
│       ├── ProductsPage.ts
│       ├── ProductsDetailPage.ts
│       ├── TestCasesPage.ts
│       └── CartPage.ts
│
├── tests/
│   └── ui/
│       ├── register-user.spec.ts
│       ├── login-user.spec.ts
│       ├── login-user-invalid.spec.ts
│       ├── logout-user.spec.ts
│       ├── register-user-existing-email.spec.ts
│       ├── contact-us.spec.ts
│       ├── test-cases-page.spec.ts
│       ├── products.spec.ts
│       └── subscription.spec.ts
│
├── test-data/
│   ├── users.json
│   └── files/
│
├── utils/
│   └── handleGoogleVignette.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

## Test Coverage

The project covers the following functional areas:

| Test Cases | Scenarios |
|---|---|
| TC001–TC005 | User registration, login, invalid login, logout, and existing email registration |
| TC006 | Contact Us form submission |
| TC007 | Test Cases page navigation |
| TC008 | Product listing and product detail verification |
| TC009 | Product search |
| TC010–TC011 | Subscription on Home and Cart pages |
| TC012 | Add multiple products to Cart |
| TC013 | Verify product quantity in Cart — In Progress |

Additional scenarios will be added as the project develops.

*Note: Test case implementation and execution status may differ. Refer to the actual test results for the latest verification status.*

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/tedyirwa/playwright-e2e-automation.git
```

Navigate to the project directory:

```bash
cd playwright-e2e-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browser:

```bash
npx playwright install chromium
```

## Running Tests

Run the complete test suite:

```bash
npm test
```

Run a specific test file:

```bash
npm test -- tests/ui/products.spec.ts
```

View the HTML test report:

```bash
npx playwright show-report
```

## Test Reliability and Debugging

The project includes a reusable Google Vignette handler to help manage advertising overlays that may interfere with browser interactions.

Playwright's built-in assertions are used to validate UI elements and expected application behavior with automatic retry capabilities.

Test failures can be investigated using Playwright screenshots, error context, and HTML reports.

## Future Improvements

- Expand functional test coverage.
- Improve test data management.
- Add API testing.
- Strengthen test isolation and reliability.
- Improve CI/CD test execution.
- Expand negative and edge-case testing.

## Author

**Muhammad Tedy Irwansyah**

QA Automation Engineer | Android Engineer

GitHub: [tedyirwa](https://github.com/tedyirwa)

---

*This repository is an ongoing QA automation portfolio project focused on practical Playwright testing, maintainable automation architecture, and continuous learning.*
