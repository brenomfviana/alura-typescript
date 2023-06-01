export class Negociation {
  private _date: Date;
  private _amount: number;
  private _price: number;

  constructor(date: Date, amount: number, price: number) {
    this._date = date;
    this._amount = amount;
    this._price = price;
  }

  get date(): Date {
    return this._date;
  }

  get amount(): number {
    return this._amount;
  }

  get price(): number {
    return this._price;
  }

  get volume(): number {
    return this._amount * this._price;
  }
}
