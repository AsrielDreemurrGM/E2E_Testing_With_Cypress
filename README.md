<h1>E2E Testing With Cypress</h1>
<p>
  Este README também está disponível em <a href="./README.pt-br.md">Português</a>
</p>
<p>
  This repository contains a hands-on study of end-to-end testing using the <strong>Cypress</strong> framework, focused on the <strong>EBAC Jobs</strong> web application.
  Automated tests were created to validate the home page rendering, job filtering, and the application form submission process.
</p>
<h2>🚀 Technologies Used</h2>
<ul>
  <li><strong>Cypress</strong> – Main framework for E2E tests;</li>
  <li><strong>JavaScript</strong> – Language used to write the tests;</li>
  <li><strong>Mochawesome</strong> – Test reporting tool;</li>
</ul>
<h2>🧪 Implemented Tests</h2>
<ul>
  <li>Home page rendering and essential elements verification;</li>
  <li>Job filtering on the Home page by different criteria;</li>
  <li>Navigation to the application page;</li>
  <li>Form filling and submission on the application page;</li>
  <li>Use of <code>beforeEach</code> to avoid code repetition across tests;</li>
  <li>Screenshot capture during test execution;</li>
</ul>
<h2>📂 Project Structure</h2>
<ul>
  <li><code>cypress/e2e</code> – Contains the test files, organized by page;</li>
  <li><code>cypress/screenshots</code> – Screenshots taken during test execution or failures;</li>
  <li><code>.gitignore</code> – Updated to ignore generated report folders;</li>
</ul>
<h2>📄 Test Reports</h2>
<p>
  Test reports are generated with <strong>mochawesome</strong> after running the tests. 
  The <code>mochawesome-report</code> folder is ignored via <code>.gitignore</code> to prevent committing generated files.
</p>
<h2>📦 How to Run</h2>
<ol>
  <li>Clone the repository;</li>
  <li>Run <code>npm install</code> to install dependencies;</li>
  <li>Run <code>npx cypress open</code> to open the test UI, or <code>npx cypress run</code> to run the tests headlessly.</li>
</ol>
<h2>📌 Notes</h2>
<ul>
  <li>This project is intended for educational purposes and local testing only;</li>
  <li>The EBAC Jobs website content may change, so adjustments may be required to keep the tests valid.</li>
</ul>
