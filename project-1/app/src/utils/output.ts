import { Printable } from "./printable.js";

export function print(...negotiations: Printable[]) {
  negotiations.forEach((negotiation) => {
    console.log(negotiation.toString());
  });
}
