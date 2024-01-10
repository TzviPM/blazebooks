import {Money, MoneyError, RawMoney} from './money';

export interface RawBook {
  id?: number;
  name: string;
  price: RawMoney;
  category: string;
  description: string;
}

export class BookError extends Error {
  constructor(
    message: string,
    public readonly field?: keyof RawBook,
  ) {
    super(message);
    this.name = 'BookError';
  }
}

export class Book {
  private constructor(
    private _id: number | undefined,
    private _name: string,
    private _price: Money,
    private _category: string,
    private _description: string,
  ) {}

  get id(): number | undefined {
    return this._id;
  }

  get price(): Money {
    return this._price;
  }

  setPrice(price: Money): void {
    if (price.isNegative()) {
      throw new BookError('Price cannot be negative');
    }
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  setName(name: string): void {
    if (name.length < 1) {
      throw new BookError('Name cannot be blank');
    }
    this._name = name;
  }

  get category(): string {
    return this._category;
  }

  setCategory(category: string): void {
    this._category = category;
  }

  get description(): string {
    return this._description;
  }

  setDescription(description: string): void {
    this._description = description;
  }

  static create(raw: RawBook): Book {
    let price!: Money;
    try {
      price = Money.create(raw.price);
    } catch (e: unknown) {
      if (e instanceof MoneyError) {
        throw new BookError(e.message, 'price');
      } else {
        throw e;
      }
    }

    if (price.isNegative()) {
      throw new BookError('Price cannot be negative', 'price');
    }
    if (raw.name.length < 1) {
      throw new BookError('Name cannot be blank', 'name');
    }
    return new Book(raw.id, raw.name, price, raw.category, raw.description);
  }

  toRaw(): RawBook {
    return {
      id: this.id,
      name: this.name,
      price: this.price.toRaw(),
      category: this.category,
      description: this.description,
    };
  }
}
