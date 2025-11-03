
<html lang="en">
<body>
  <div class="container">
    <h1>End-to-End Testing Framework using Playwright &amp; TypeScript</h1>

   <p class="badge">Playwright · TypeScript · Node.js</p>

   <h2>Overview</h2>
   <p>
The goal of this assignment is to build an end-to-end (E2E) testing framework using Playwright with JavaScript/TypeScript to simulate real user behavior on a web application of your choice.

The framework should automate and validate the following main user journeys:

Sign Up – Register a new account.

Sign In – Log in with valid credentials.

Sign Out – Log out successfully.    </p>

  <h2>Tech Stack</h2>
   <ul>
      <li>Playwright (testing framework)</li>
      <li>TypeScript (language)</li>
      <li>Node.js &amp; npm</li>
      <li>Optional: Allure Reporter (for advanced reporting)</li>
   </ul>

   <h2>Project Structure</h2>
    <pre><code>tests/
 ├── specs/              → Test cases (e.g., LoginTest.spec.ts)
 ├── pages/              → Page Object Model (POM) files
 ├── test-data/          → JSON files with test data
 ├── utils/              → Helper utilities
 └── reports/            → Test reports output
playwright.config.ts
package.json
README.html
</code></pre>

   <h2>Installation &amp; Run</h2>
    <pre><code># 1) Install dependencies
npm install

# 2) Run all tests
npx playwright test

# 3) Run a specific test file
npx playwright test tests/specs/LoginTest.spec.ts

# 4) Run with Playwright UI
npx playwright test --ui

# 5) Run with grep (filter by test name or tag)
npx playwright test -g "Login"

# 6) Run in headed mode (local debugging)
npx playwright test --headed
</code></pre>

  <h2>Reporting (Optional)</h2>
    <p>If using Allure:</p>
    <pre><code>npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
</code></pre>

   <h2>CI/CD Integration (GitHub Actions)</h2>
    <p>Example steps to include in your pipeline:</p>
    <pre><code>npx playwright install --with-deps
npx playwright test
</code></pre>
   <p>On CI keep <code>headless: true</code> in <code>playwright.config.ts</code>. If you must run headed tests on Linux use <code>xvfb-run</code>.</p>

   <h2>Key Features</h2>
    <ul>
      <li>Page Object Model (POM) design</li>
      <li>Data-driven testing</li>
      <li>Cross-browser testing (Chromium, Firefox, WebKit)</li>
      <li>Mobile emulation support</li>
      <li>CI/CD ready</li>
    </ul>


</body>
</html>
