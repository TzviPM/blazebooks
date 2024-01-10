import './index.css';

import {StoreProvider} from './StoreProvider';
import {loadBooks} from './data/books';

export const metadata = {
  title: 'BlazeBooks',
  description:
    'A bookstore app to showcase front-end development skills as part of the BlazeSoft interview process.',
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const books = await loadBooks();

  return (
    <html lang="en">
      <body>
        <StoreProvider booksData={books}>
          {children}
          {modal}
        </StoreProvider>
      </body>
    </html>
  );
}
