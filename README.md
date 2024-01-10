# BlazeBooks

> BlazeBooks is a bookstore app to showcase front-end development skills as part of the BlazeSoft interview process.

## Summary

See the [Design doc](https://docs.google.com/document/d/1yYfF4Xabh9e3st1jrer2tGvj1Bc8zNWeHqQnahpwOA8/edit) for a summary of business specifications

## Common tasks

In development:

- Install deps with `npm install`, which also generates `panda` files (see [Generated Code](#generated-code) below).
- Run the development server with `npm run dev`
- Run tests in watch mode with `npm run test`
- Re-format code with prettier using `npm run format`
- Test code locally for CI requirements using `npm run check`.

Automated tasks:

- Each pull request or commit into the `main` branch triggers a CI pipeline that checks for:
  - consistent formatting
  - common coding anti-patterns
  - type safety
  - unit test violations
- Each PR also triggers a CD pipeline via vercel that will generate a deploy preview to view changes prior to integrating them in the `main` branch.
- Commits into `main` trigger a CD pipeline in vercel that will attempt to build a deployment and, if successful, to promote it to the [production domain](https://blazebooks.vercel.app).

## Technical Design

The app will be built using React, TypeScript, and Redux. To showcase an eye for performance, it will use PandaCSS for styling and will have a data store to better showcase SSR techniques. React hooks will be used for abstracting logic. Vitest will be used for testing as it is a more actively maintained alternative to Jest. Prettier will be used for consistent code styling and eslint for language-specific consistency.

## Application Concerns

Some of the key concerns for BlazeBooks are:

- forms
  - creating a new book
  - updating book details
  - Forms will be handled using react-hook-form
    - The Redux community [recommends this approach](https://redux-toolkit.js.org/usage/nextjs#overall-recommendations) for use with NextJS, suggesting to "only use Redux for globally shared, mutable data"
- modals
  - creating a new book or updating a book will be done via a modal
  - NextJS provides a [parallel routing mechanism for modals](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals)
- structured list (of books):
  - This could be done in a table, but HTML tables are notoriously known for being difficult to make clickable. Instead, we will opt for a card approach that will also lend itself nicely to a responsive design on smaller screens.

## Code Structure

The code is primarily contained in the `src/` directory with the following top-level subdirectories:

- `app` contains the Next.JS app dir interface. Files are named as per the [`app` routing conventions](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions).
- `components` contains React components used throughout the application. Some components, such as `Heading1` are purely to abstract presentation logic. Some, such as `Money` encapsulate domain-specific UI logic. Others, such as `BookList` encapsulate application-level logic such as redux-aware data display. As the application size increases, it may be wise to split these types of components up further, but that does not seem necessary at this stage of the project.
- `core` contains the domain logic. It is written in typescript, but is not specific to any other technology choices, such as React or Redux.
- `lib` contains the application logic. It is written using redux toolkit and depends on data types and models in the `core` folder.
- `test` contains test-specific utilities. Tests themselves are always colocated with the files they are testing in order to optimize for code deletion.

## Generated Code

In addition to the files checked into git, running the application will generate optimized css using `panda`. This leverages custom imports that are generated into a `styled-system` directory adjacent to `src`.

NextJS also generates build files into a dedicated `.next` directory.
