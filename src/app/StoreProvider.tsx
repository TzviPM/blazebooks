'use client';

import {PropsWithChildren, useRef} from 'react';
import {Provider} from 'react-redux';

import {makeStore, AppStore} from '../lib/store';
import {setInitialBooks} from '../lib/features/booksSlice';
import {Book, RawBook} from '../core/books';

export type StoreProviderProps = PropsWithChildren<{
  booksData: RawBook[];
}>;

export function StoreProvider({children, booksData}: StoreProviderProps) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(setInitialBooks(booksData));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
