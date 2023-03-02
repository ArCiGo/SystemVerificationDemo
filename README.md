# System Verification Demo Assessment

A technical assessment for the **Software Engineer in Test** position.

## The project 💻

The following project was made using TS & Cypress.

*Do you want to create a framework based on this project? Check this [branch](https://github.com/ArCiGo/TS-Automation-Framework/tree/master)!*

## Tools ⚙️

* *Cypress v10.3.1*.
* *cypress-mochawesome-reporter v3.2.0*.
* *TypeScript v4.7.4*.

## Main project structure 🗂️

```
.
├── Automationassignment
├── cypress/
│   ├── e2e/
│   │   └── ui.spec.cy.ts
│   ├── fixtures/
│   │   ├── products.json
│   │   └── STD7DetailedInfo.json
│   ├── support/
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   │   └── index.ts
│   └── tsconfig.json
├── cypress.config.ts
├── cypress.env.json
└── package.json
```

## Setup 🛠️

The following steps can be executed using a terminal (I use [hyper](https://hyper.is/)), or using the terminal provided by VS Code.

1. Clone the repo on your computer at any path you want.-

```bash
> git clone https://github.com/ArCiGo/SystemVerificationDemo.git

> git checkout master
```
2. In the path you cloned the repo, open the project folder and install the packages.-
```bash
> cd SystemVerificationDemo

> npm i
```

## Run the tests ⚡
```bash
# If you don't want to open the Cypress GUI, you can execute the following commands:
> npm run cypress:open:cli
# or
> npm run html-report

# If you want to open the GUI:
> npm run cypress:open
```

When you run the tests, a new folder is generated inside the `cypress` folder (`reports`). This folder contains the report for the executed tests. If a test fails, the report will include a screenshot to see what the failure was.