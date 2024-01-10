import {Container, Flex} from '../../../styled-system/jsx';
import {Heading1} from '../../components/Heading1';
import {BookCreateForm} from '../../components/BookCreateForm';

export default function Page() {
  return (
    <Container>
      <Flex justify="space-between">
        <Heading1>Add a Book</Heading1>
      </Flex>
      <BookCreateForm />
    </Container>
  );
}
