'use client';

import {BookForm} from './BookForm';
import {createBook} from '../lib/features/booksSlice';
import {useAppDispatch} from '../lib/hooks';
import {useRouter} from 'next/navigation';

export function BookCreateForm({dialog}: {dialog?: boolean}) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <BookForm
      dialog={dialog}
      onSubmit={book => {
        dispatch(createBook(book.toRaw()));
        if (dialog) {
          router.back();
        } else {
          router.push('/');
        }
      }}
    />
  );
}
