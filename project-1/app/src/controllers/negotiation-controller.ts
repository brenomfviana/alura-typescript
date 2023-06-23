import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { MessageView } from "../views/message-view.js";
import { WeekDays } from "../enums/week-days.js";
import { runtime } from "../decorators/runtime.js";
import { domInjector } from "../decorators/dom-injector.js";
import { NegotiationService } from "../services/negotitation-service.js";
import { print } from "../utils/output.js";

export class NegotiationController {
  @domInjector("#date")
  private inputDate: HTMLInputElement;
  @domInjector("#amount")
  private inputAmount: HTMLInputElement;
  @domInjector("#price")
  private inputPrice: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView");
  private messageView = new MessageView("#messageView");
  private negotiationService = new NegotiationService();

  constructor() {
    this.negotiationsView.update(this.negotiations);
  }

  @runtime()
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
    print(negotiation, this.negotiations);
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

  public importData(): void {
    this.negotiationService
      .requestNegotiations()
      .then((negotiations) => {
        return negotiations.filter((negotiation) => {
          return !this.negotiations.list().some((n) => n.isEqual(negotiation));
        });
      })
      .then((negotiations) => {
        for (let negotiation of negotiations) {
          this.negotiations.add(negotiation);
        }
        this.negotiationsView.update(this.negotiations);
      });
  }

  private is_weekend(date: Date): boolean {
    const weekend = [WeekDays.SUNDAY, WeekDays.SATURDAY];
    return weekend.some((x) => x === date.getDay());
  }

  private is_business_day(date: Date): boolean {
    return !this.is_weekend(date);
  }
}
