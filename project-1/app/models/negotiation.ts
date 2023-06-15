export class Negotiation {
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

  public static create(
    strDate: string,
    strAmount: string,
    strPrice: string,
  ): Negotiation {
    const exp = /-/g;
    const date = new Date(strDate.replace(exp, ","));
    const amount = parseInt(strAmount);
    const price = parseFloat(strPrice);
    return new Negotiation(date, amount, price);
  }
}
