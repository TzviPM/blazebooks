'use server';

import {RawBook} from '../../core/books';

export async function loadBooks(): Promise<RawBook[]> {
  return [
    {
      id: 1,
      name: 'To Kill A Mockingbird',
      price: 10_00,
      category: 'Classics',
      description: 'A classic book about racism, by Harper Lee',
    },
    {
      id: 2,
      name: 'The Great Gatsby',
      price: 12_00,
      category: 'Classics',
      description:
        'A classic book about the American Dream, by F. Scott Fitzgerald',
    },
    {
      id: 3,
      name: 'Atomic Habits',
      price: 15_00,
      category: 'Self-help',
      description: 'A book about building good habits, by James Clear',
    },
  ];
}
