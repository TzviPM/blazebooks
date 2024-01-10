import {createSelector, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../hooks';
import {Book, RawBook} from '../../core/books';
import {RootState} from '../store';
import {create} from 'domain';

export interface BooksState {
  books: RawBook[];
}

const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setInitialBooks: (state, action: PayloadAction<RawBook[]>) => {
      state.books = action.payload;
    },
    createBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload.toRaw());
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const book = state.books.find(book => book.name === action.payload.name);
      if (book) {
        const updated = action.payload.toRaw();
        book.price = updated.price;
        book.category = updated.category;
        book.description = updated.description;
      }
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      const index = state.books.findIndex(book => book.name === action.payload);
      if (index !== -1) {
        state.books.splice(index, 1);
      }
    },
  },
});

export const {setInitialBooks, createBook, deleteBook, updateBook} =
  booksSlice.actions;

const selectBooks = createSelector(
  (state: RootState) => state.books.books,
  books => books.map(Book.create),
);

const selectBook = (name: string) =>
  createSelector(
    (state: RootState) => state.books.books.find(book => book.name === name),
    book => book && Book.create(book),
  );

export const useBooksList = () => useAppSelector(selectBooks);
export const useBook = (name: string) => useAppSelector(selectBook(name));

export default booksSlice.reducer;
