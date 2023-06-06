export class Negociations {
    constructor() {
        this.negociations = [];
    }
    add(negociation) {
        this.negociations.push(negociation);
    }
    list() {
        return this.negociations;
    }
}
