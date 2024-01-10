import {Heading1} from '../../../components/Heading1';
import {Container, Flex} from '../../../../styled-system/jsx';

export default function Page({params}: {params: {id: string}}) {
  return (
    <Container>
      <Flex justify="space-between">
        <Heading1>Edit Book {params.id}</Heading1>
      </Flex>
    </Container>
  );
}
