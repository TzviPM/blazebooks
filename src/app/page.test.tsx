import {expect, test} from 'vitest';
import {screen} from '@testing-library/react';
import Page from './page';
import {renderWithProvider} from '../test/utils';

test('Page', () => {
  renderWithProvider(<Page />);
  expect(screen.getByRole('heading', {level: 1, name: 'Books'})).toBeDefined();
});
