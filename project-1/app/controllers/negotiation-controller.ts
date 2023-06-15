import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { MessageView } from "../views/message-view.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputPrice: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView");
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputPrice = document.querySelector("#price");
    this.negotiationsView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = this.createNegotiation();
    this.negotiations.add(negotiation);
    console.log(this.negotiations.list());
    this.cleanForm();
    this.updateView();
  }

  private createNegotiation(): Negotiation {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ","));
    const amount = parseInt(this.inputAmount.value);
    const price = parseFloat(this.inputPrice.value);

    return new Negotiation(date, amount, price);
  }

  private cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "0";
    this.inputPrice.value = "0.0";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("The negotiation was successfully added!");
  }
}
