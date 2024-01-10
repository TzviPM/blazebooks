import Link from 'next/link';
import {GridItem} from '../../styled-system/jsx';
import {Book} from '../core/books';
import {Money} from './Money';
import {grid} from '../../styled-system/patterns';

export const BookCard = ({
  name,
  category,
  price,
}: Pick<Book, 'name' | 'category' | 'price'>) => {
  return (
    <Link
      href={`${name}/edit`}
      className={grid({
        columns: 3,
        gap: '6',
        width: 'full',
      })}
    >
      <GridItem>{name}</GridItem>
      <GridItem>{category}</GridItem>
      <GridItem>
        <Money value={price} />
      </GridItem>
    </Link>
  );
};
