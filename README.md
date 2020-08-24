# pomelo-node-challenge-solution
 Solution project for Pomelo NodeJS challenge test

## Steps to run
### Run "npm install" on terminal to install all the dependencies

#### To run the server
Type and run "**npm run dev**" on terminal. 

On sucessfull run, terminal will show message: "**Server running at: http://localhost:3000**". 

Any overrides of the host or port can be done via "**serverConfig.js**" in the project inside "**src >> configs**" folder.


#### To run tests
- **npm run test**: This will run all tests inside "**test** folder".

#### To run test coverage
- **npm run test-cvg**: This will run test coverage.

#### API endpoints
- http://localhost:3000/api/pomelochallenge/repos/1  - **This API covers Problem 1 in the test**
This API connects with Github and searches repositores with term - "nodejs". It display 10 rows per page and a total of 10 pages.
This setting can be customized via **appConfig.js** under **src >> configs** folder
