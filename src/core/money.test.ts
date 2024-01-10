import {describe, expect, test} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithProvider} from '../test/utils';
import {Money, MoneyError} from './money';

describe('Money', () => {
  test('can be instantiated with zero', () => {
    const zero = Money.create(0);
    expect(zero.toRaw()).toBe(0);
  });

  test('can be instantiated with negative values', () => {
    const negative = Money.create(-1_00);
    expect(negative.toRaw()).toBe(-1_00);
  });

  test('can be instantiated with positive values', () => {
    const positive = Money.create(1_00);
    expect(positive.toRaw()).toBe(1_00);
  });

  test('throws an error when instantiated with decimal values', () => {
    expect(() => Money.create(1.99)).toThrowError(MoneyError);
  });

  test('throws an error when instantiated with non-numeric floats', () => {
    expect(() => Money.create(NaN)).toThrowError(MoneyError);
    expect(() => Money.create(Infinity)).toThrowError(MoneyError);
    expect(() => Money.create(-Infinity)).toThrowError(MoneyError);
  });

  describe('dollars and cents', () => {
    test('returns the dollars', () => {
      const money = Money.create(1_00);
      expect(money.dollars).toBe(1);
    });

    test('returns the cents', () => {
      const money = Money.create(1_00);
      expect(money.cents).toBe(0);
    });

    test('returns the cents when there are cents', () => {
      const money = Money.create(1_23);
      expect(money.cents).toBe(23);
    });

    test('returns integer dollars when there are cents', () => {
      const money = Money.create(1_23);
      expect(money.dollars).toBe(1);
    });
  });
});
