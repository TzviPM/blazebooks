import {Heading1} from '../../../components/Heading1';
import {Container, Flex} from '../../../../styled-system/jsx';
import {BookEditForm} from '../../../components/BookEditForm';

export default function Page({params}: {params: {id: number}}) {
  return (
    <Container>
      <Flex justify="space-between">
        <Heading1>Edit Book {params.id}</Heading1>
      </Flex>
      <BookEditForm id={params.id} />
    </Container>
  );
}
