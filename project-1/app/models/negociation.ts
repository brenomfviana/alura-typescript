export class Negociation {
  constructor(
    private _date: Date,
    public readonly amount: number,
    public readonly price: number
  ) {}

  get date(): Date {
    return new Date(this._date.getTime());
  }

  get volume(): number {
    return this.amount * this.price;
  }
}
