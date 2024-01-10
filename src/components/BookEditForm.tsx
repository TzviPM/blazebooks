'use client';

import {BookForm} from './BookForm';
import {useBook} from '../lib/features/booksSlice';

export function BookEditForm({id, dialog}: {id: number; dialog?: boolean}) {
  const book = useBook(id);
  return <BookForm dialog={dialog} initialData={book?.toRaw()} />;
}
