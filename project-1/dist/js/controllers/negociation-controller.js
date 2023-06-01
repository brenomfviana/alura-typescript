import { Negociation } from "../models/negociation.js";
export class NegociationController {
  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputPrice = document.querySelector("#price");
  }
  add() {
    const negociation = new Negociation(
      this.inputDate,
      this.inputAmount,
      this.inputPrice
    );
  }
}
