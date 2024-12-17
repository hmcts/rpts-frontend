# rpts-frontend

## Table of Contents

* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Running the application](#running-the-application)
  * [Running with Docker](#running-with-docker)
  * [Endpoints](#endpoints)
  * [NSPL Data - National Statistics Postcode Lookup](#nspl-data---national-statistics-postcode-lookup)
  * [OS Data - Ordnance Survey](#os-data---ordnance-survey)
* [Developing](#developing)
  * [Code style](#code-style)
  * [Running the tests](#running-the-tests)
  * [Security](#security)
    * [CSRF prevention](#csrf-prevention)
    * [Helmet](#helmet)
  * [Healthcheck](#healthcheck)
* [License](#license)

## Getting Started

### Prerequisites

Running the application requires the following tools to be installed in your environment:

- [Node.js](https://nodejs.org/) v12.0.0 or later
- [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com)

### Running the application

Install dependencies by executing the following command:

```bash
$ yarn install
```

Bundle:

```bash
$ yarn webpack
```

Run:

```bash
$ yarn start
```

The applications's home page will be available at http://localhost:3120

### Running with Docker

Create docker image:

```bash
  docker-compose build
```

Run the application by executing the following command:

```bash
  docker-compose up
```

This will start the frontend container exposing the application's port
(set to `3120` in this template app).

In order to test if the application is up, you can visit http://localhost:3120 in your browser.
You should get a very basic home page (no styles, etc.).

### Endpoints

Returns a NsplAddress entity which contains address lines and local authority information.
```
GET /v1/search/<postcode>
```


### NSPL Data - National Statistics Postcode Lookup

The application uses the NSPL data to provide address information based on the postcode.
For more information about the latest NSPL data, search and download from [here](https://geoportal.statistics.gov.uk/search?sort=Date%20Updated%7Cmodified%7Cdesc).

Example: National Statistics Postcode Lookup - 2021 Census (May 2024) for the UK


### OS Data - Ordnance Survey

The application uses OS Places API for postcode searching to make sure we're getting the most up to date data.
See [here](https://www.ordnancesurvey.co.uk/products/os-places-api#overview) for more information.

## Developing

### Code style

We use [ESLint](https://github.com/typescript-eslint/typescript-eslint)
alongside [sass-lint](https://github.com/sasstools/sass-lint)

Running the linting with auto fix:

```bash
$ yarn lint --fix
```

### Running the tests

This template app uses [Jest](https://jestjs.io//) as the test engine. You can run unit tests by executing
the following command:

```bash
$ yarn test
```

Here's how to run functional tests (the template contains just one sample test):

```bash
$ yarn test:routes
```

Running accessibility tests:

```bash
$ yarn test:a11y
```

Make sure all the paths in your application are covered by accessibility tests (see [a11y.ts](src/test/a11y/a11y.ts)).

### Security

#### CSRF prevention

[Cross-Site Request Forgery](https://github.com/pillarjs/understanding-csrf) prevention has already been
set up in this template, at the application level. However, you need to make sure that CSRF token
is present in every HTML form that requires it. For that purpose you can use the `csrfProtection` macro,
included in this template app. Your njk file would look like this:

```
{% from "macros/csrf.njk" import csrfProtection %}
...
<form ...>
  ...
    {{ csrfProtection(csrfToken) }}
  ...
</form>
...
```

#### Helmet

This application uses [Helmet](https://helmetjs.github.io/), which adds various security-related HTTP headers
to the responses. Apart from default Helmet functions, following headers are set:

- [Referrer-Policy](https://helmetjs.github.io/docs/referrer-policy/)
- [Content-Security-Policy](https://helmetjs.github.io/docs/csp/)

There is a configuration section related with those headers, where you can specify:

- `referrerPolicy` - value of the `Referrer-Policy` header

Here's an example setup:

```json
    "security": {
      "referrerPolicy": "origin",
    }
```

Make sure you have those values set correctly for your application.

### Healthcheck

The application exposes a health endpoint (https://localhost:3120/health), created with the use of
[Nodejs Healthcheck](https://github.com/hmcts/nodejs-healthcheck) library. This endpoint is defined
in [health.ts](src/main/controllers/health.ts) file. Make sure you adjust it correctly in your application.
In particular, remember to replace the sample check with checks specific to your frontend app,
e.g. the ones verifying the state of each service it depends on.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
