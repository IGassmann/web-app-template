# Web App Template

Web app template is a simple but complete template for creating web apps.

## Features

- [x] [React](https://reactjs.org/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Install the following tools:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (see required version in the `engines` field of
  [`package.json`](./package.json))
  - We recommend using [fnm](https://github.com/Schniz/fnm) to manage Node.js versions. After
    installing it, run `$ fnm install` to install the required Node.js version.

### Setup

1. Clone this repository
2. Install [`pnpm`](https://pnpm.io/installation) with Corepack by running `$ corepack enable; corepack prepare`
3. Install dependencies by running `$ pnpm install`
4. Set up local environment variables by running `$ pnpm env:pull`
5. Run `$ pnpm dev`
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### Testing

Run `$ pnpm test` to run all tests.

Run `$ pnpm test:watch` to run all tests in watch mode.

### Code Linting

Code linting is handled by [ESLint](https://eslint.org/). It's configured to follow [Airbnb
JavaScript Style Guide](https://airbnb.io/javascript/). You can use the following command for
linting all project's files:

```sh
$ pnpm lint
```

Staged files are automatically linted before commits. Be sure to **fix all linting errors before
committing**.

Editor integrations are available [here](https://eslint.org/docs/user-guide/integrations).

### Code Formatting

Code formatting is handled by [Prettier](https://prettier.io/). You can use the following command
for formatting all project's files:

```sh
$ pnpm format
```

Staged files are automatically formatted before commits.

Editor integrations are available [here](https://prettier.io/docs/en/editors.html).

## Documentation

### Architecture Decision Record

We use Architectural Decision Records (ADRs) for documenting architectural significant decisions.

To learn more about ADRs and browse them, check out [our architectural decision log](https://adr.web-app-template.igassmann.me/).

To learn how to write a new ADR, check out [./docs/architectural-decisions/README.md](./docs/architectural-decisions/README.md).

### REST API Guidelines

Our REST APIs should follow our internal [REST API Guidelines](./docs/api-guidelines.md).

## Roadmap

You can check the product's roadmap on [Linear](https://linear.app/).
