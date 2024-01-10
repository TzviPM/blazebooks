import {Heading1} from './../components/Heading1';
import {Container, Flex} from '../../styled-system/jsx';
import {BookList} from '../components/BookList';
import Link from 'next/link';

export default function Page() {
  return (
    <Container>
      <Flex justify="space-between">
        <Heading1>Books</Heading1>
        <Link href="/add" passHref>
          Add a Book
        </Link>
      </Flex>
      <BookList />
    </Container>
  );
}
