# Web App Template

This is a complete template for building web apps. It's primarily intended for my own usage. I use
it to gather my learnings and opinions on best practices and configurations.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Tailwind Catalyst
- Clerk
- Prettier
- ESLint
- SVGR
- Conventional Commits
- Airbnb Style Guide
- pnpm
- Segment Analytics
- Sentry

## Setup

Before being able to run the app for the first time, you need to follow the steps below:

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js v20](https://nodejs.org/en/download/)
  - We recommend using [fnm](https://github.com/Schniz/fnm) to manage Node.js versions. After
    installing it, run `fnm install` in the root directory of the project to install the proper
    Node.js version.
- Join the team on Vercel with your GitHub account.

### Instructions

1. Clone this repository
2. Install [`pnpm`](https://pnpm.io/) with
   [Corepack](https://nodejs.org/docs/latest-v20.x/api/corepack.html) by running
   `corepack enable; corepack prepare`
3. Install dependencies by running `pnpm install`
4. Link local repository to its Vercel project by running `pnpm vercel link`
5. Download environment variables by running `pnpm env:pull`

## Developing

### Running the App

#### Development Mode

To start the app in development mode, run the following command:

```sh
$ pnpm dev
```

This will start a local server that will automatically rebuild the app and refresh the page when you
make changes to the code. The app will be available at
[http://localhost:3000](http://localhost:3000).

This is how you will run the app most of the time.

#### Debug Mode

If you're debugging and want to attach a debugger, you can use the following command to start the
app in debug mode:

```sh
$ pnpm dev:debug
```

To learn how to attach a debugger to the app, see
[this guide](https://nextjs.org/docs/advanced-features/debugging).

#### Production Mode

To run the app in production mode, run the following commands in order:

```sh
# Build the app for production usage
$ pnpm build

# Start the app in production mode
$ pnpm start
```

This can be useful for testing the app in production mode locally.

### Code Linting

Code linting is handled by [ESLint](https://eslint.org/). You can use the following command for
linting all project's files:

```sh
$ pnpm lint
```

Staged files are automatically linted before commits. Be sure to **fix all linting errors before
committing**.

We recommend using an
[editor integration for ESLint](https://eslint.org/docs/user-guide/integrations).

### Code Formatting

Code formatting is handled by [Prettier](https://prettier.io/). You can use the following command to
format all project’s files:

```sh
$ pnpm format
```

Staged files are automatically formatted when committing.

We recommend using an [editor integration for Prettier](https://prettier.io/docs/en/editors.html).

### Analytics

To measure the value and impact of a feature, it's essential to properly add analytics events to it
before releasing it. Be sure to read through the [Data Tracking Plan](./docs/data-tracking-plan.md)
to learn how we track analytics data.

### Environment Variables

Environment variables are handled by the [Vercel CLI](https://vercel.com/docs/cli/env). Use the
following commands to manage them:

```sh
# Download development environment variables for running the app locally
$ pnpm env:pull

# Add a new environment variable
$ pnpm env:add

# Remove an environment variable
$ pnpm env:rm
```

Check the [Vercel documentation](https://vercel.com/docs/concepts/projects/environment-variables)
for more information.

You should **never commit environment variables** to the repository. If you need to add a new
environment variable, add it with the `pnpm env:add` command and then download it with the
`pnpm env:pull` command.

### Committing Changes

Before committing changes, make sure you are not on the `main` branch. If you are, create a new
branch with the following command:

```sh
$ git checkout -b <branch-name>
```

We have adopted the [Conventional Commits](https://www.conventionalcommits.org/) specification for
commit messages. This leads to more consistent and readable messages that are easy to follow when
looking through the project's history. This can be especially helpful when reviewing or bisecting
the code, as well as when writing the changelog for the project.

The commit messages should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The `<type>` should be one of the following:

- `feat`: a new feature
- `fix`: a bug fix
- `refactor`: a code change made to make it easier to understand and cheaper to modify without
  changing its observable behavior
- `rewrite`: A re-implementation of an existing functionality
- `perf`: a code change that improves performance
- `docs`: documentation only changes
- `style`: changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
- `test`: adding missing tests or correcting existing tests
- `build`: changes that affect the build system or external dependencies (example scopes: `deps`,
  `pnpm`, `ci`...)
- `config`: changes to project configuration files (example scopes: `jest`, `package-json`,
  `eslint`)
- `chore`: maintenance tasks
- `revert`: a revert of a previous commit

To make it easier to follow the specification, we have added a command line tool that will help you
write commit messages. You can use it by running the following command after staging your changes:

```sh
$ git commit
```

This will open an interactive prompt that will guide you through writing a commit message. You can
also use the `git commit -m <message>` command to bypass the prompt and write the message directly.

### Submitting Changes

Once you have committed and pushed your changes, you need to
[create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
on GitHub.

As for commit messages, the **pull request title should follow the
[Conventional Commits](https://www.conventionalcommits.org/) specification**. When merged, the pull
request title will be used as the commit message on the `main` branch.

For the pull request description, follow the
[pull request template](.github/pull_request_template.md). It is pre-filled when you create a pull
request and contains instructions on what to write.

Check out the [Pull Request Guidelines](docs/pull-request-guidelines.md) to learn how to properly
submit a pull request and review other people's pull requests.

The pull request will be automatically deployed to a
[Vercel preview environment](https://vercel.com/docs/concepts/deployments/preview-deployments). You
can use this deployment to test and share your changes with others. Your teammates will be able to
review and [leave comments](https://vercel.com/docs/concepts/deployments/comments) on the live
deployment.

Once the pull request is approved and merged, the changes will be automatically deployed to the
production environment.

## Documentation

### Architecture Decision Record

We use Architectural Decision Records (ADRs) for documenting architectural significant decisions.

To learn more about ADRs and browse them, check out
[our architectural decision log](https://adr.web-app-template.igassmann.me/).

To learn how to write a new ADR, check out
[docs/architectural-decisions/README.md](./docs/architectural-decisions/README.md).

### Data Tracking Plan

We use a [Data Tracking Plan](./docs/data-tracking-plan.md) to document how we track data analytics.

### REST API Guidelines

Our REST APIs should follow our internal [REST API Guidelines](./docs/api-guidelines.md).

## Roadmap

You can check the product's roadmap on [Linear](https://linear.app/).
