import Link from 'next/link';
import {GridItem} from '../../styled-system/jsx';
import {Book} from '../core/books';
import {Money} from './Money';
import {grid} from '../../styled-system/patterns';
import {DeleteBookButton} from './DeleteBookButton';

export const BookCard = ({
  name,
  category,
  price,
  id,
}: Pick<Book, 'name' | 'category' | 'price' | 'id'>) => {
  return (
    <Link
      href={`${id}/edit`}
      className={grid({
        columns: 4,
        gap: '6',
        width: 'full',
      })}
      onClick={e => {
        let cur = e.nativeEvent.target as HTMLElement;
        let next = cur.parentElement;
        while (next != null && next !== e.nativeEvent.currentTarget) {
          if (cur.tagName.toUpperCase() === 'BUTTON') {
            // Prevent the link from being followed if the click was on an interior button
            e.preventDefault();
            return;
          }
          cur = next;
          next = cur.parentElement;
        }
      }}
    >
      <GridItem>{name}</GridItem>
      <GridItem>{category}</GridItem>
      <GridItem>
        <Money value={price} />
      </GridItem>
      <GridItem>
        <DeleteBookButton id={id} />
      </GridItem>
    </Link>
  );
};
