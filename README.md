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
Once the server is running, it exposes 2 endpoints

- http://localhost:3000/api/pomelochallenge/format  - **This API covers Problem 1 in the test**
This API is an Http POST endpoint that accepts an input JSON object in the body payload, and outputs a transformed JSON object. 
Both input and output formats are provided in the test.

- http://localhost:3000/api/pomelochallenge/repos/1  - **This API covers Problem 2 in the test**
This API is an HTTP GET endpoint that connects with Github and searches repositores with term - "nodejs". It, then, display the repository information in an HTML table format. It display table of 10 rows per page and a total of 10 pages.
This setting can be customized via **appConfig.js** under **src >> configs** folder

