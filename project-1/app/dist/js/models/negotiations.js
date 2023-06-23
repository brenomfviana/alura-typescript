export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
    toString() {
        return JSON.stringify(this.negotiations, null, 2);
    }
    isEqual(other) {
        return JSON.stringify(this.list()) === JSON.stringify(other.list());
    }
}
