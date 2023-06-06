import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations: Negociation[] = [];

  add(negociation: Negociation) {
    this.negociations.push(negociation);
  }

  list(): readonly Negociation[] {
    return this.negociations;
  }
}
