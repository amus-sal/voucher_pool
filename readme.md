# VoucherPool

Create voucher pool and assign them to each customer if exist with special offer.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


## How it works

VoucherPool service is to generate, verify and use  voucher codes for each existing customer and offer , you can for testing generate fake customers and offer for end to end testing, and there is ability to connect to different DB to get customer data. 

## Tech stack

The service is built in Typescript with mongo DB


## Running the service

Manually 
- make sure you installed TSC lib for typescript compiling 
```
npm run tsc 
npm run server 
```
Using Docker and Docker-compose

```
docker-compose build -d 
docker-compose up -d 
```

So the base url will be :
```
http://127.0.0.1:3000/
```


## Functionalities 

Health Check 
```
GET  http://127.0.0.1:3000/check
```

create customers
```
POST  http://127.0.0.1:3000/customer
```

create offers
```
POST  http://127.0.0.1:3000/offer
```

create voucher 
```
POST  http://127.0.0.1:3000/voucher
```

list voucher with query (by email for ex)
```
GET  http://127.0.0.1:3000/voucher/list?email=ex@ex.com
```

use voucher code for specific email 
```
PUT  http://127.0.0.1:3000/voucher/use
```

## Running the Swagger 
http://127.0.0.1:3000/swagger



## Running the tests

The test structure depends on mocha strategy. The built tests are functional test cases. you can find the main test function within "helper" folder. 
The start point is at test folder with index.js 

```
npm i -g mocha chai
npm test
```


## Deployment Notes

Add live connections to - config/ default.json -


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available.

