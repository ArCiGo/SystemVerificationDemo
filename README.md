# Automation Framework made with TS + Cypress

The goal of this project was to put into practice my knowledge using this amazing tool for automation testing.

*Do you want to create a framework based on this project? Check this [branch](https://github.com/ArCiGo/TS-Automation-Framework/tree/master)!*

## The project 💻

The **SWAG Labs/Sauce Demo** store, from **Sauce Labs**, was automated using *TS + Cypress*. It generates an HTML report for passed and failed tests. Also, this project has **GitHub Action**s and **Docker**. 

## Tools ⚙️

* *Cypress v10.3.1*.
* *cypress-mochawesome-reporter v3.2.0*.
* *TypeScript v4.7.4*.
* *GitHub Actions*.
* *Docker*.

## Main project structure 🗂️

```
.
├── .github/
│   └── workflow/
│       └── main.yml
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.cy.ts
│   │   ├── logout.spec.cy.ts
│   │   └── shoppingCart.spec.cy.ts
│   ├── fixtures/
│   │   └── products.json
│   ├── support/
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   │   └── index.ts
│   └── tsconfig.json
├── cypress.config.ts
├── cypress.env.json
├── Dockerfile
└── package.json
```

## Setup 🛠️

The following steps can be executed using a terminal (I use [hyper](https://hyper.is/)), or using the terminal provided by VS Code.

1. Clone the repo on your computer at any path you want.-

```bash
> git clone https://github.com/ArCiGo/JS-Automation-Framework.git

> git checkout AutomationFrameworkSample_TS
```
2. In the path you cloned the repo, open the project folder and install the packages.-
```bash
> cd TS-Automation-Framework

> npm i
```
3. There is a *cypress.env.json* file without values. For demo purposes, you can fill it with these values.-

```json
{
    "valid_user": {
        "username": "standard_user",
        "password": "secret_sauce"
    },
    "locked_user": {
        "username": "locked_out_user"
    },
    "invalid_user": {
        "username": "wrong_username",
        "password": "wrong_password"
    }
}
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

![UI Report Sample](./Img_Report_01.png)
![UI Report Sample](./Img_Report_02.png)

## Docker 🐋

If you want to execute the tests using Docker, you can do the following in your terminal at the workspace project.-


```bash
# Without a Dockerfile

# Pull the Cypress Docker image you need to run the tests. You can use the latest one
> docker pull cypress/included:9.4.1

# Execute the following command to see the info of the image
> docker run -it --entrypoint=cypress cypress/included:9.4.1 info

# Then, execute the following command to run the tests inside of the container
> docker run -it -v $(pwd):/e2e -w /e2e cypress/included:9.4.1 --spec cypress/e2e --browser electron
```

```bash
# With a Dockerfile

# Execute the following command to compile the file. <YourVersionTag> may be any value you want
> docker build -t my-cypress-image:<YourVersionTag> .

# Then, execute the following command to run the tests inside of the container
> docker run -i -v $(pwd):/my-cypress-project -t my-cypress-image:<YourVersionTag> --spec cypress/e2e
```