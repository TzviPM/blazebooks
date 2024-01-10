import {Heading1} from './../components/Heading1';
import {Container} from '../../styled-system/jsx';
import {BookList} from '../components/BookList';

export default function Page() {
  return (
    <Container>
      <Heading1>Books</Heading1>
      <BookList />
    </Container>
  );
}
