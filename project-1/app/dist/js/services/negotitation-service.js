import { Negotiation } from "../models/negotiation.js";
export class NegotiationService {
    requestNegotiations() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((data) => {
            return data.map((negotiation) => {
                return new Negotiation(new Date(), negotiation.vezes, negotiation.montante);
            });
        });
    }
}
