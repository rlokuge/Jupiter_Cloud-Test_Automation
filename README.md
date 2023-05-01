# Jupiter_Cloud-Test_Automation

Project contains UI tests for Jupiter Cloud web application (https://jupiter.cloud.planittesting.com/)

Tools & Technologies: Automation Tool - PlayWright | Programming Language - JavaScript

Framework Design Pattern - Page Object Model 

Framework Capabilities
- Headed & Headless Testing
- Cross Borwswer & Cross Device Testing
- Data Driven (using Json files) 
- Ability to integrate with continious pipeline (i.e. Jenkins) 
- Parallel test execution 
- Automatically retries failed testcases

Test Reporting 
- Generates HTML report 
- Screenshot - Automatically captures screenshot after each testcase 
- Video - Records videos for each test but retain for failed tests 
- Trace - Enables for failed tests 

How to execute the tests? 

Following custom scripts are setup to trigger tests from package.json file 
  1. chrome-headless - Runs all tests in Chorome browser in headless mode
  2. chrome-head - Runs all tests in Chorome browser in headed mode
  3. corss-browser-head - Runs all the tests in Chrome, Firefox, Safari & Edge browsers in headed mode in parallel with 3 workers 
  4. cross-browser-headless - Runs all the tests in Chrome, Firefox, Safari & Edge browsers in headless mode in parallel with 3 workers 
  5. cross-device-head - Runs all the tests in mobile browsers in iOS and Android emulators in headless mode in parallel with 3 workers
  6. cross-device-headless - Runs all the tests in mobile browsers in iOS and Android emulators in headless mode in parallel with 3 workers
  7. all-browsers-devices-head - Runs all the tests in all the above browsers and mobile emulators in headless mode in parallel with 4 workers
  8. all-browsers-devices-headless - Runs all the tests in all the above browsers and mobile emulators in headless mode in parallel with 4 workers

To execute the tests locally for any of the above scripts, run this command - npm run (script-name)  
