'use client';
import {VStack} from '../../styled-system/jsx';
import {useBooksList} from '../lib/features/booksSlice';
import {BookCard} from './BookCard';

export function BookList() {
  const bookList = useBooksList();

  return (
    <VStack>
      {bookList.map(book => (
        <BookCard
          key={book.id}
          id={book.id}
          name={book.name}
          category={book.category}
          price={book.price}
        />
      ))}
    </VStack>
  );
}
