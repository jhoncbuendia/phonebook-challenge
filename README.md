# phonebook-challenge

### ARCHITECTURE
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/architecture.png)

### Backend Structure
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/backend_structure.png)

Dependencies

```
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

* 1: lambdas: lambdas deployed on aws
* 2: library: local libraries
* 2.1: data-model: crud

## Lambda Functions
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/lambda.png)

### API GATEWAY
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/api_gateway2.png)

### FrontEnd Structure
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/frontend_structure.png)

Dependencies

```
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

### FrontEnd hosted on s3
![ScreenShot](https://github.com/jhoncbuendia/phonebook-challenge/blob/master/img/s3.png)

## Server Url: http://phonebook-challenge.s3-website-us-east-1.amazonaws.com/#
