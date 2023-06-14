export class Negotiation {
    constructor(_date, amount, price) {
        this._date = _date;
        this.amount = amount;
        this.price = price;
    }
    get date() {
        return new Date(this._date.getTime());
    }
    get volume() {
        return this.amount * this.price;
    }
}
