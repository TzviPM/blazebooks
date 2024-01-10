import {render} from '@testing-library/react';
import {StoreProvider, StoreProviderProps} from '../app/StoreProvider';

const defaultProviderProps: Omit<StoreProviderProps, 'children'> = {
  booksData: [],
};

export function renderWithProvider(
  ui: React.ReactElement,
  data: Partial<typeof defaultProviderProps> = {},
) {
  const providerProps = {
    ...defaultProviderProps,
    ...data,
  };
  return render(<StoreProvider {...providerProps}>{ui}</StoreProvider>);
}
