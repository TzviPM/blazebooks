import {Money, RawMoney} from './money';

export interface RawBook {
  name: string;
  price: RawMoney;
  category: string;
  description: string;
}

export class Book {
  private constructor(
    public readonly name: string,
    public price: Money,
    public category: string,
    public description: string,
  ) {}

  static create(raw: RawBook): Book {
    const price = Money.create(raw.price);
    return new Book(raw.name, price, raw.category, raw.description);
  }

  toRaw(): RawBook {
    return {
      name: this.name,
      price: this.price.toRaw(),
      category: this.category,
      description: this.description,
    };
  }
}
