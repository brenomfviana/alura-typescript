export class Negociation
{
    private _date;
    private _amount;
    private _price;

    constructor(date, amount, price) {
        this._date = date;
        this._amount = amount;
        this._price = price;
    }

    get date() {
        return this._date;
    }

    get amount() {
        return this._amount;
    }

    get price() {
        return this._price;
    }

    get volume() {
        return this._amount * this._price;
    }
}
