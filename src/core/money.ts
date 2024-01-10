export type RawMoney = number;

export class MoneyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MoneyError';
  }
}

/**
 * Money is a value object that represents a monetary amount.
 *
 * It is represented as an integer number of cents.
 *
 * Currency is not represented. The current implementation models a "dollar" value
 * similar to USD, but this is not enforced.
 */
export class Money {
  private constructor(private readonly raw: RawMoney) {}

  static create(raw: RawMoney): Money {
    if (Number.isInteger(raw) === false) {
      throw new MoneyError('Money must be an integer');
    }
    return new Money(raw);
  }

  toRaw(): RawMoney {
    return this.raw;
  }

  isNegative(): boolean {
    return this.raw < 0;
  }

  get dollars(): number {
    return this.raw / 100;
  }

  get cents(): number {
    return this.raw % 100;
  }
}
