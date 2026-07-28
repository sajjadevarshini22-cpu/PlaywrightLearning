# PlaywrightLearning

A Playwright + TypeScript automation practice project created as part of my **30-Day Advanced QA Engineer Challenge**.

## 📌 Project Overview

This repository contains UI automation tests developed using **Microsoft Playwright** and **TypeScript**. The goal is to practice modern web automation concepts such as navigation, locators, assertions, screenshots, and reporting.

## 🛠 Tech Stack

* Playwright
* TypeScript
* Node.js
* VS Code
* Git & GitHub

## 📂 Project Structure

```text
PlaywrightLearning/
│
├── tests/
│   ├── title.spec.ts
│   ├── url.spec.ts
│   ├── heading.spec.ts
│   ├── click.spec.ts
│   └── button.spec.ts
│
├── screenshots/
├── playwright-report/
├── test-results/
├── playwright.config.ts
├── package.json
└── README.md
```

## ▶️ How to Run Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a single test:

```bash
npx playwright test tests/button.spec.ts
```

Open HTML report:

```bash
npx playwright show-report
```

## ✅ Implemented Test Scenarios

* Verify page title
* Verify URL
* Verify heading visibility
* Click **Get Started** and validate navigation
* Capture screenshots after successful navigation

## 📸 Screenshot Example

The project captures screenshots and stores them in the `screenshots/` folder for evidence and debugging.

## 🎯 Learning Outcomes

Through this project I practiced:

* Playwright test structure
* Navigation and user actions
* Assertions using `expect`
* Locator strategies (`getByRole`, `locator`)
* Screenshot capture
* Git and GitHub workflow

## 🚀 Future Enhancements

* Page Object Model (POM)
* Data-driven testing
* Parallel execution
* CI/CD with GitHub Actions
* Jenkins integration
* Advanced reporting and logging

## 👩‍💻 Author

**Devarshini Sajja**

GitHub: https://github.com/sajjadevarshini22-cpu

LinkedIn: https://www.linkedin.com/in/devarshini-sajja-2509a9277
