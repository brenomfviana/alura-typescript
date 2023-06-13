import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputPrice: HTMLInputElement;
  private negociations = new Negociations();
  private negociationsView = new NegociationsView("#negociationsView");

  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputPrice = document.querySelector("#price");
    this.negociationsView.update(this.negociations);
  }

  public cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "0";
    this.inputPrice.value = "0.0";
    this.inputDate.focus();
  }

  public add(): void {
    const negociation = this.createNegociation();
    this.negociations.add(negociation);
    console.log(this.negociations.list());
    this.negociationsView.update(this.negociations);
    this.cleanForm();
  }

  private createNegociation(): Negociation {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ","));
    const amount = parseInt(this.inputAmount.value);
    const price = parseFloat(this.inputPrice.value);

    return new Negociation(date, amount, price);
  }
}
