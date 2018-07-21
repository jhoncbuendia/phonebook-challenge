# phonebook-challenge

### ARCHITECTURE
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/architecture.png)

### Backend Structure
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/backend_structure.png)

Dependencies

```javascript
{
    "chai": "^4.1.2",
    "mocha": "^5.2.0",
    "async": "^2.6.1",
    "mongoose": "^5.2.4",
    "mongoose-uuid2": "^2.1.0",
    "node-uuid": "^1.4.8"
  }
```
Definitions

* 1: lambdas: AWS Lambda Developer(s)	Amazon.com Initial release	November 2014; 3 years ago Operating system	Cross-platform Available in	English [Website](http://aws.amazon.com/lambda)	http://aws.amazon.com/lambda AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of the Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code. It was introduced in November 2014.[1]

The purpose of Lambda, as compared to AWS EC2, is to simplify building smaller, on-demand applications that are responsive to events and new information. AWS targets starting a Lambda instance within milliseconds of an event. Node.js, Python, Java, Go[2] and C# through .NET Core are all officially supported as of 2016, and other languages can be supported via call-outs. However, some runtimes, such as the Java Virtual Machine, may be slower than others to start.

## Lambda Functions
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/lambda.png)

* 1.1 api gateway

API Gateway enables you to define a schema or model for the payload to facilitate setting up the body mapping template. ... You can also use a REST API client, such as Postman, to make raw API calls. In addition, you can enable API creation with AWS CloudFormation templates or API Gateway Extensions to Swagger.

### API GATEWAY
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/api_gateway2.png)

* 2: library: local libraries
* 2.1: data-model: logical inter-relationships and data flow between different data elements involved in the information world. It also documents the way data is stored and retrieved. Data models facilitate communication business and technical development by accurately representing the requirements of the information system and by designing the responses needed for those requirements. Data models help represent what data is required and what format is to be used for different business processes.

### FrontEnd Structure
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/frontend_structure.png)

Dependencies

```javascript
{
    "jquery": "^3.3.1",
    "moment": "^2.22.2",
    "moment-timezone": "^0.5.21",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-moment": "^0.7.9",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.4",
    "redux": "^3.7.2"
  }
```
Definitions

* 1: actions: redux actions
* 2: reducers: redux reducers
* 3: services: service library
* 4: components: app components
* 4.1 ContactList
* 4.2 ContactModal
* 4.3 ContactView
* 4.4 TopBar


Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

Your app is ready to be deployed.

### FrontEnd hosted on s3
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/s3.png)

## Demo
![Alt Text](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/example.gif)

## Server Url: http://phonebook-challenge.s3-website-us-east-1.amazonaws.com/#
