import {styled} from '../../styled-system/jsx';
import {Money as MoneyValue} from '../core/money';

export interface MoneyProps {
  value: MoneyValue;
}

export const Money = ({value}: MoneyProps) => {
  return (
    <styled.span>
      <styled.span color="slate.800">$</styled.span>
      {value.dollars}
      <styled.span color="slate.800">.</styled.span>
      {('' + value.cents).padStart(2, '0')}
    </styled.span>
  );
};
