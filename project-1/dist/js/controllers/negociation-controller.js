import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegociationsView } from "../views/negociations-view.js";
export class NegociationController {
  constructor() {
    this.negociations = new Negociations();
    this.negociationsView = new NegociationsView("#negociationsView");
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputPrice = document.querySelector("#price");
    this.negociationsView.update(this.negociations);
  }
  cleanForm() {
    this.inputDate.value = "";
    this.inputAmount.value = "0";
    this.inputPrice.value = "0.0";
    this.inputDate.focus();
  }
  add() {
    const negociation = this.createNegociation();
    this.negociations.add(negociation);
    console.log(this.negociations.list());
    this.negociationsView.update(this.negociations);
    this.cleanForm();
  }
  createNegociation() {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ","));
    const amount = parseInt(this.inputAmount.value);
    const price = parseFloat(this.inputPrice.value);
    return new Negociation(date, amount, price);
  }
}
