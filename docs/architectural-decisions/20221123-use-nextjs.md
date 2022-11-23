# Use Next.js

- Status: accepted
- Deciders: IGassmann
- Tags: technology

## Context and Problem Statement

We need a way to build a web application. We want to use a framework that is well-supported and
that we can bet on for the long term. Which framework should we use?

## Decision Drivers <!-- optional -->

- Made for React
- Well maintained
- Good documentation
- Good community

## Considered Options

- [Next.js](https://nextjs.org/)
- [Remix](https://remix.run/)
- [Create React App](https://create-react-app.dev/)

## Decision Outcome

Chosen option: "Next.js", because it is the most mature production-ready framework for React.

## Pros and Cons of the Options

### Next.js

Next.js is a popular, lightweight framework for static and server‑rendered applications built with
React. It comes pre-packaged with features like routing, styling, and server-side rendering, getting
your project up and running quickly.

It's maintained by Vercel.

- Good, because it's very popular and actively maintained
- Good, because it comes with a lot of features out of the box
- Good, because it's mature and has a large community

### Remix

Remix is a new framework for building web applications with React. It's built on top of React Router
and is designed to be easy to use and easy to learn, while still giving you the power to make
everything yourself.

It is maintained by Shopify.

- Good, because it's new and has a lot of potential
- Bad, because it's not as mature as Next.js

### Create React App

Create React App is the most popular way to try out React and build a new single-page, client-side
application. It’s made for React but isn’t opinionated about routing or data fetching.

Create React App doesn't handle backend logic or databases. You can use it with any backend. When
you build a project, you’ll get a folder with static HTML, CSS and JS. Because Create React App
can’t take advantage of the server, it doesn't provide the best performance.

It's maintained by Facebook.

- Good, because of its popularity
- Good, because it's easy to get started
- Bad, because it doesn't come with routing and server-side rendering
- Bad, because [their own documentation says it's not the best choice for production apps](https://reactjs.org/learn/start-a-new-react-project#building-with-a-full-featured-framework)
