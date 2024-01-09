import {styled} from '../../styled-system/jsx';

export function Heading1({children}: PropsWithChildren<{}>) {
  return (
    <styled.h1 fontSize="2xl" fontWeight="bold">
      {children}
    </styled.h1>
  );
}
