import { Printable } from "../interfaces/printable.js";

export function print(...negotiations: Printable[]) {
  negotiations.forEach((negotiation) => {
    console.log(negotiation.toString());
  });
}
