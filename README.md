NestJS Promo-code Backend API

## Description
Simple mock up API for Promo-code backend. <br/>
The API only has one endpoint, POST /promo-code.<br/>
Body contains
  - count: (number) number of promo codes to read.

Response: JSON format
{
  id: (number) promo code id,
  serviceName: (string) service name,
  description: (string) description,
  code: (string) promo code,
  status?: (string) pending or active
}

### Live Demo


## Installation

```bash
$ yarn install
```
### Environment configuration
Copy `.env.example -> .env`.


## Running the app

```bash
# start
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

Open browser and visit `localhost:3001/api`.

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
