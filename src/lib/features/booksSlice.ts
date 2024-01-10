import {
  createSelector,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '../hooks';
import {Book, RawBook} from '../../core/books';
import {RootState} from '../store';

const booksAdapter = createEntityAdapter<RawBook, number>({
  selectId: book => book.id ?? -1,
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState(),
  reducers: {
    setInitialBooks: (state, action: PayloadAction<RawBook[]>) => {
      booksAdapter.setAll(state, action.payload);
    },
    createBook: (state, action: PayloadAction<RawBook>) => {
      const maxBook = state.ids.reduce((a, b) => Math.max(a, b), 0);
      booksAdapter.addOne(state, {
        ...action.payload,
        id: maxBook + 1,
      });
    },
    updateBook: (state, action: PayloadAction<RawBook>) => {
      booksAdapter.updateOne(state, {
        id: action.payload.id!,
        changes: action.payload,
      });
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      booksAdapter.removeOne(state, action.payload);
    },
  },
});

export const {setInitialBooks, createBook, deleteBook, updateBook} =
  booksSlice.actions;

const {selectById, selectAll} = booksAdapter.getSelectors();

const selectBooks = createSelector(
  (state: RootState) => selectAll(state.books),
  books => books.map(Book.create),
);

const selectBook = (id: number) =>
  createSelector(
    (state: RootState) => selectById(state.books, id),
    book => book && Book.create(book),
  );

export const useBooksList = () => useAppSelector(selectBooks);
export const useBook = (id: number) => useAppSelector(selectBook(id));

export default booksSlice.reducer;
