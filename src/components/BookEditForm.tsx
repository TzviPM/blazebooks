'use client';

import {BookForm} from './BookForm';
import {updateBook, useBook} from '../lib/features/booksSlice';
import {useAppDispatch} from '../lib/hooks';
import {useRouter} from 'next/navigation';

export function BookEditForm({id, dialog}: {id: number; dialog?: boolean}) {
  const book = useBook(id);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <BookForm
      dialog={dialog}
      initialData={book?.toRaw()}
      onSubmit={book => {
        dispatch(
          updateBook({
            ...book.toRaw(),
            id: Number(id),
          }),
        );
        if (dialog) {
          router.back();
        } else {
          router.push('/');
        }
      }}
    />
  );
}
