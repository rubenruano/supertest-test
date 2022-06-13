# jest-integration

This repo contains scripts written in Jest to be used as examples of integration tests, using https://jsonplaceholder.typicode.com/ as our API.

## Test modularization

Module: simple Jest test against a single endpoint. For example a test that logs
in a user.

Flow: A flow is an assembly of modules.
For example:

- Create a user
- Login same user
- Request password token for same user
- Change password for same user using token from previous request
- Login same user with new password

Suite: An assembly of modules or flows for a specific testing purpose.
For example you may have a full integration suite made of several flows and a
performance suite made out of a limited number of positive modules.

## Folder structure

- modules
  - {endpoint}
    - {action}-{endpoint}.js
      - etc...
  - etc...
- Flows
  - {filename}.js
  - etc...
- Suites
  - {filename}.js
  - etc...

## Naming files

Modules: "{action}-{endpoint}.js" for example: "get-users.js"

Flows: the name of the file will not be sufficient to explain its purpose. A
complete description should be added.

```JavaScript
describe(
    "E2E authentication flow:\n\
  - Create new user\n\
  - Login same user\n\
  - Get password change token for same user\n\
  - Change password of same user\n\
  - Login same user using new password\n\
  ",...
```

Suites: "{purpose}.spec.js" for example "integration.spec.js".

## Execution Context

When executing any kind of tests the HOSTNAME environment variable is always
required. Depending on the purpose of the suite we may to use different
environment tu run the tests againts.

## How to execute the tests

### Jump start

This repo is configured with the following commands

Run example suites

```console
npm run test
```

### Environment Variables

```console
HOSTNAME = {url}
VERSION = {num}
```

[API List](https://github.com/public-apis/public-apis)
[Art Institute of Chicago](https://api.artic.edu/docs/#quick-start)


https://calendarific.com/api-documentation
https://calendarific.com/account
API Key 455b5a72c3bf47760106a8d34a52c49bf690cb19

https://calendarific.com/api/v2/holidays?api_key=455b5a72c3bf47760106a8d34a52c49bf690cb19&country=AR&year=2022
