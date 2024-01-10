import {BookForm} from './../../components/BookForm';

import {Heading1} from '../../components/Heading1';
import {Container, Flex} from '../../../styled-system/jsx';

export default function Page() {
  return (
    <Container>
      <Flex justify="space-between">
        <Heading1>Add a Book</Heading1>
      </Flex>
      <BookForm />
    </Container>
  );
}
