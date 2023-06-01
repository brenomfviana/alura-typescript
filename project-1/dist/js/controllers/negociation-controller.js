import { Negociation } from "../models/negociation.js";
export class NegociationController {
  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputPrice = document.querySelector("#price");
  }
  add() {
    const negociation = this.createNegociation();
    console.log(negociation);
  }
  createNegociation() {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ","));
    const amount = parseInt(this.inputAmount.value);
    const price = parseFloat(this.inputPrice.value);
    return new Negociation(date, amount, price);
  }
}
