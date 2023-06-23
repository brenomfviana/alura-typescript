import { NegotiationInterface } from "../interfaces/negotiation-interface.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationService {
  public requestNegotiations(): Promise<Negotiation[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((data: NegotiationInterface[]) => {
        return data.map((negotiation) => {
          return new Negotiation(
            new Date(),
            negotiation.vezes,
            negotiation.montante
          );
        });
      });
  }
}
