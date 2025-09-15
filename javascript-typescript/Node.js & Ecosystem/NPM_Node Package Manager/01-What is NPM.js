//What is NPM?

//NPM = Node Package Manager

// Default package manager for Node.js.

// Helps developers install, share, and manage JavaScript packages/libraries.

// Comes bundled when you install Node.js.

//NPM is a package manager for javascript modules.
// What is module?
// When you have a problem, you write a code for it. When you have same problem in other project you can reuse the same piece of code. These individual files containing reusable code are called modules.


//Why NPM is Important

// Reuse code instead of writing from scratch.

// Manage dependencies (third-party libraries).

// Automate tasks with scripts.

// Huge ecosystem → world’s largest software registry.

//What is a Package?
// A package in Node.js contains all the files you need for a module.
// Modules are JavaScript libraries you can include in your project.
// A package is a directory with one or more modules and along with a special file called package.json and this file has metadata about the package.

// Key Files

// package.json

// The “manifest” of a project.

// Stores metadata: project name, version, dependencies, scripts.

// package-lock.json

// Locks exact dependency versions to ensure consistency.

// {
//   "name": "gnw-automation",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "postinstall": "npx patch-package",
//     "Connect-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.connect.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "Connect-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.connect.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "Connect-PROD": "jest --setupFiles=./prod-configuration.ts --reporters default jest-stare --c=jest.connect.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "Distribute-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js  --c=jest.distribute.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "Distribute-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.distribute.config.json --forceExit --maxWorkers=2 & node ./multiple-cucumber-report-config.js",
//     "ConnectIRHub-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.connectIRHub.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "ConnectIRHub-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.connectIRHub.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "EDGAR-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.edgar.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "EDGAR-QC": "jest --setupFiles=./QC-configuration.ts --reporters=./CustomRunner.js --c=jest.edgar.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "SelfService-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.selfservice.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "SelfService-QC": "jest --setupFiles=./QC-configuration.ts --reporters=./CustomRunner.js --c=jest.selfservice.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "Distribute-PROD": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.common.config.json --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Common-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.common.config.json --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Common-UAT": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.common.config.json --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "EPA-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.epa.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "EPA-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.epa.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Portal-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.portal.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Portal-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.portal.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "MediaMonitoring-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.mediamonitoring.config.json --forceExit --maxWorkers=1 & node ./multiple-cucumber-report-config.js",
//     "MediaMonitoring-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.mediamonitoring.config.json --forceExit --maxWorkers=1 & node ./multiple-cucumber-report-config.js",
//     "Servicedesk-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.servicedesk.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Servicedesk-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.servicedesk.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "ServicedeskSmoke-QC": "jest --Tags=@sdqcsmoke-and-not-@sduatsmoke-and-not-@sdprodsmoke --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "ServicedeskSmoke-UAT": "jest --Tags=@sduatsmoke-and-not-@sdqcsmoke-and-not-@sdprodsmoke --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "ServicedeskSmoke-PROD": "jest --Tags=@sdprodsmoke-and-not-@sdqcsmoke-and-not-@sduatsmoke --setupFiles=./prod-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Launchpad-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.Launchpad.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Launchpad-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.Launchpad.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "IRPortal-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.irportal.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "IRPortal-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.irportal.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "IRPortalSmoke-QC": "jest --Tags=@irportalqcsmoke-and-not-@irportaluatsmoke-and-not-@irportalprodsmoke --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "IRPortalSmoke-UAT": "jest --Tags=@irportaluatsmoke-and-not-@irportalqcsmoke-and-not-@irportalprodsmoke --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "IRPortalSmoke-PROD": "jest --Tags=@irportalprodsmoke-and-not-@irportalqcsmoke-and-not-@irportaluatsmoke --setupFiles=./prod-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "unison_gnw_integration-QC": "jest dynamicPrimaryAc.steps --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.unison_gnw_integration.config.json --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "unison_gnw_integration-UAT": "jest dynamicPrimaryAc.steps --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.unison_gnw_integration.config.json --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "N3A-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.n3a.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "N3A-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.n3a.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "N3ASmoke-PROD": "jest --Tags=@prodsmoke-and-not-@qc-and-not-@uat --setupFiles=./prod-configuration.ts --reporters=./CustomRunner.js --c=jest.n3asmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "GnWSmoke-QC": "jest --Tags=@qcsmoke-and-not-@uatsmoke-and-not-@prodeusmoke-and-not-@produssmoke --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.smoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "GnWSmoke-UAT": "jest --Tags=@uatsmoke-and-not-@qcsmoke-and-not-@prodeusmoke-and-not-@produssmoke --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.smoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "GnWSmoke_EU-PROD": "jest --Tags=@prodeusmoke-and-not-@qcsmoke-and-not-@produssmoke-and-not-@uatsmoke --setupFiles=./prod-configuration.ts --reporters=./CustomRunner.js --c=jest.smoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "GnWSmoke_US-PROD": "jest --Tags=@produssmoke-and-not-@qcsmoke-and-not-@prodeusmoke-and-not-@uatsmoke --setupFiles=./prod-configuration.ts --reporters=./CustomRunner.js --c=jest.smoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "MyAccount-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.myAccount.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "MyAccount-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.myAccount.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "MyAccountSmoke-QC": "jest --Tags=@myaccountqcsmoke-and-not-@myaccountuatsmoke-and-not-@myaccountprodsmoke --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "MyAccountSmoke-UAT": "jest --Tags=@myaccountuatsmoke-and-not-@myaccountqcsmoke-and-not-@myaccountprodsmoke --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "MyAccountSmoke-PROD": "jest --Tags=@myaccountprodsmoke-and-not-@myaccountqcsmoke-and-not-@myaccountuatsmoke --setupFiles=./prod-configuration.ts --reporters=./CustomRunner.js --c=jest.irsmoke.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "NewsArchive-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.newsarchive.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "NewsArchive-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.newsarchive.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "PNR-QC": "jest --Tags=(@qc-or-@tableqc)-and-not-@tableuat-and-not-@tableprod --dependentCreds=true --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.pnr.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "PNR-UAT": "jest --Tags=(@uat-or-@tableuat)-and-not-@tableqc-and-not-@tableprod --dependentCreds=true --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.pnr.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "PNR-PROD": "jest --Tags=(@prod-or-@tableprod)-and-not-@tableqc-and-not-@tableuat --dependentCreds=false --setupFiles=./prod-configuration.ts --reporters=./CustomRunner.js --c=jest.pnr.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "Hub-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.hub.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Hub-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.hub.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "Hub-PROD": "jest --setupFiles=./prod-configuration.ts --reporters=./CustomRunner.js --c=jest.hub.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "ConnectConsole-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.connectconsole.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "ConnectConsole-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.connectconsole.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "IRHubConsole-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.irhubConsole.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "IRHubConsole-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.irhubConsole.config.json --forceExit --maxWorkers=3 & node ./multiple-cucumber-report-config.js",
//     "DistributeIRHub-UAT": "jest --setupFiles=./uat-configuration.ts --reporters=./CustomRunner.js --c=jest.distributeIRHub.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js",
//     "DistributeIRHub-QC": "jest --setupFiles=./qc-configuration.ts --reporters=./CustomRunner.js --c=jest.distributeIRHub.config.json --forceExit --maxWorkers=4 & node ./multiple-cucumber-report-config.js"
//   },
//   "repository": {
//     "type": "git",
//     "url": "https://repo.west.com/WDC/gnw-automation.git"
//   },
//   "keywords": [
//     "jest",
//     "cucumber",
//     "BDD",
//     "gherkin"
//   ],
//   "author": "",
//   "license": "ISC",
//   "devDependencies": {
//     "@cucumber/cucumber": "^7.3.2",
//     "@types/mssql": "^9.1.5",
//     "@types/node": "^18.11.3",
//     "ts-jest": "^27.1.3",
//     "typescript": "^4.5.5"
//   },
//   "dependencies": {
//     "@fast-csv/parse": "^5.0.0",
//     "@gnw/multiple-cucumber-html-reporter": "file:Packages/multiple-cucumber-html-reporter-0.5.9.tgz",
//     "@hapi/joi": "^17.1.1",
//     "@js-temporal/polyfill": "^0.4.0",
//     "@playwright/test": "^1.22.2",
//     "cheerio": "^1.0.0-rc.12",
//     "csv-parser": "^3.2.0",
//     "expect-playwright": "^0.8.0",
//     "image-to-base64": "^2.2.0",
//     "jest": "^27.5.1",
//     "jest-cucumber": "^3.0.0",
//     "jest-playwright-preset": "^1.7.0",
//     "mssql": "^10.0.2",
//     "patch-package": "^6.5.1",
//     "pem": "^1.14.8",
//     "playwright": "^1.48.1",
//     "playwright-video": "^2.4.0",
//     "spacetime": "^6.16.3",
//     "supertest": "^4.0.2"
//   }
// }

//What is the purpose of package.json?
// Your project's package.json is the central place to configure and describe how to interact with and run your application. 
// It is used by the npm CLI (and yarn) to identify your project and understand how to handle the project's dependencies. 
// It's the package.json file that enables npm to start your project, run scripts, install dependencies, publish to the NPM registry, and many other useful tasks. 
// The npm CLI is also the best way to manage your package.json because it helps generate and update your package.json file throughout a project's life.

//what is npm init command?

// npm init is a command used to initialize a new Node.js project and create a package.json file. 
// When you run npm init in your terminal or command prompt within a directory where you want to create a new Node.js project, 
// it guides you through a series of prompts to gather information about your project and generate a package.json file based on your inputs.

//Here's how npm init works:
// 1.	Run npm init: You open your terminal or command prompt, navigate to the directory where you want to create your new Node.js project, and then type npm init and press Enter.
// 2.	Answer prompts: npm init will prompt you with a series of questions to collect information about your project. These questions typically include:
// •	Project name
// •	Version
// •	Description
// •	Entry point (main JavaScript file)
// •	Test command
// •	Git repository
// •	Keywords
// •	Author
// •	License

//Generate package.json: After you've answered all the prompts, npm init will generate a package.json file in the current directory based on your responses. 
// This file contains all the information you provided, as well as additional metadata about your project.

//Interview Question: tell me about all elements inside package.json file?

//name: The name of your project. This should be a unique identifier for your project in the NPM registry.

//version: The current version of your project, following semantic versioning (e.g., 1.0.0).

//description: A brief description of your project and its purpose.

//main: The entry point to your project (e.g., the main JavaScript file). Entry point = starting file for your app/package.

// index.js = default entry point file (but you can change it in package.json with "main").

// 👉 For apps: index.js usually starts your server or runs main logic.
// 👉 For packages/libraries: index.js usually exports functions or classes for others to use.

//scripts: A set of scripts that can be run using npm run <script-name>. This is where you define commands for testing, building, and other tasks.

//repository: Information about the source code repository for your project, typically a Git repository.

//keywords: An array of keywords that describe your project and can help others find it in the NPM registry.

//author: The name of the project author or maintainer.

//license: The license under which your project is distributed (e.g., MIT, ISC).

//devDependencies: A list of packages that are only needed for development and testing (e.g., testing frameworks, build tools).

//dependencies: A list of packages that your project depends on to run in production.
