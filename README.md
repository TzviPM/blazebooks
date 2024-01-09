# BlazeBooks

> BlazeBooks is a bookstore app to showcase front-end development skills as part of the BlazeSoft interview process.

## Summary

See the [Design doc](https://docs.google.com/document/d/1yYfF4Xabh9e3st1jrer2tGvj1Bc8zNWeHqQnahpwOA8/edit) for a summary of business specifications

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
