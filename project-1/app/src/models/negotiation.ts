import { Object } from "../interfaces/object.js";

export class Negotiation implements Object<Negotiation> {
  constructor(
    private _date: Date,
    public readonly amount: number,
    public readonly price: number
  ) {}

  public static create(
    strDate: string,
    strAmount: string,
    strPrice: string
  ): Negotiation {
    const exp = /-/g;
    const date = new Date(strDate.replace(exp, ","));
    const amount = parseInt(strAmount);
    const price = parseFloat(strPrice);
    return new Negotiation(date, amount, price);
  }

  get date(): Date {
    return new Date(this._date.getTime());
  }

  get volume(): number {
    return this.amount * this.price;
  }

  public toString(): string {
    return `
      Date: ${this.date},
      Amount: ${this.amount},
      Price: ${this.price}
    `;
  }

  public isEqual(other: Negotiation): boolean {
    return (
      this.date.getDate() == other.date.getDate() &&
      this.date.getMonth() == other.date.getMonth() &&
      this.date.getFullYear() == other.date.getFullYear()
    );
  }
}
