import { Object } from "../interfaces/object.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Object<Negotiations> {
  private negotiations: Negotiation[] = [];

  public add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  public list(): readonly Negotiation[] {
    return this.negotiations;
  }

  public toString(): string {
    return JSON.stringify(this.negotiations, null, 2);
  }

  public isEqual(other: Negotiations): boolean {
    return JSON.stringify(this.list()) === JSON.stringify(other.list());
  }
}
