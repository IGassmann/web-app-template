# Web App Template

Web app template built with [Next.js](https://nextjs.org/).

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Install the following tools:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (see version in the `engines` field of [`package.json`](./package.json))
- [Yarn](https://yarnpkg.com/en/docs/install) (see version in the `engines` field of [`package.json`](./package.json))

### Setup

1. Clone this repository
2. Install dependencies by running `$ yarn`
3. Set up local environment variables by running `$ cp .env.development .env.local`
4. Run `$ yarn dev`

## Development

### Code Linting

Code linting is handled by [ESLint](https://eslint.org/). It's configured to follow [Airbnb
JavaScript Style Guide](https://airbnb.io/javascript/). You can use the following command for
linting all project's files:

```sh
$ yarn lint
```

Staged files are automatically linted before commits. Be sure to **fix all linting errors before
committing**.

Editor integrations are available [here](https://eslint.org/docs/user-guide/integrations).

### Code Formatting

Code formatting is handled by [Prettier](https://prettier.io/). You can use the following command
for formatting all project's files:

```sh
$ yarn format
```

Staged files are automatically formatted before commits.

Editor integrations are available [here](https://prettier.io/docs/en/editors.html).

## Documentation

### Architecture Decision Record

This project uses ADRs for documenting architecture decisions. See
[the relevant ADR](./docs/architectural-decisions/20211230-use-markdown-architectural-decision-records.md)
for learning more.

- [Project ADRs](./docs/architectural-decisions)

### REST API Guidelines

Our REST APIs should follow our internal [REST API Guidelines](./docs/api-guidelines.md).

## Roadmap

You can check the product's roadmap on [Linear](https://linear.app/).
