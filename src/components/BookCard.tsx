import {Flex, Grid, GridItem} from '../../styled-system/jsx';
import {Book} from '../core/books';
import {Money} from './Money';

export const BookCard = ({
  name,
  category,
  price,
}: Pick<Book, 'name' | 'category' | 'price'>) => {
  return (
    <Grid columns={3} gap="6" w="full">
      <GridItem>{name}</GridItem>
      <GridItem>{category}</GridItem>
      <GridItem>
        <Money value={price} />
      </GridItem>
    </Grid>
  );
};
