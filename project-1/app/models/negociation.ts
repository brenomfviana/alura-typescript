export class Negociation
{
    #date;
    #amount;
    #price;

    constructor(date, amount, price) {
        this.#date = date;
        this.#amount = amount;
        this.#price = price;
    }

    get date() {
        return this.#date;
    }

    get amount() {
        return this.#amount;
    }

    get price() {
        return this.#price;
    }

    get volume() {
        return this.#amount * this.#price;
    }
}
