import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { MessageView } from "../views/message-view.js";
import { WeekDays } from "../enums/week-days.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputPrice: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView", true);
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputDate = document.querySelector("#date") as HTMLInputElement;
    this.inputAmount = document.querySelector("#amount") as HTMLInputElement;
    this.inputPrice = document.querySelector("#price") as HTMLInputElement;
    this.negotiationsView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = Negotiation.create(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputPrice.value
    );
    if (!this.is_business_day(negotiation.date)) {
      this.messageView.update("Apenas negociações em dias úteis são aceitas!");
      return;
    }
    this.negotiations.add(negotiation);
    console.log(this.negotiations.list());
    this.cleanForm();
    this.updateView();
  }

  private cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "0";
    this.inputPrice.value = "0.0";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("A negociação foi criada com sucesso!");
  }

  private is_weekend(date: Date): boolean {
    const weekend = [WeekDays.SUNDAY, WeekDays.SATURDAY];
    return weekend.some((x) => x === date.getDay());
  }

  private is_business_day(date: Date): boolean {
    return !this.is_weekend(date);
  }
}
