export class Negotiation {
    constructor(_date, amount, price) {
        this._date = _date;
        this.amount = amount;
        this.price = price;
    }
    static create(strDate, strAmount, strPrice) {
        const exp = /-/g;
        const date = new Date(strDate.replace(exp, ","));
        const amount = parseInt(strAmount);
        const price = parseFloat(strPrice);
        return new Negotiation(date, amount, price);
    }
    get date() {
        return new Date(this._date.getTime());
    }
    get volume() {
        return this.amount * this.price;
    }
    toString() {
        return `
      Date: ${this.date},
      Amount: ${this.amount},
      Price: ${this.price}
    `;
    }
}
