var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView("#negotiationsView");
        this.messageView = new MessageView("#messageView");
        this.negotiationService = new NegotiationService();
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.create(this.inputDate.value, this.inputAmount.value, this.inputPrice.value);
        if (!this.is_business_day(negotiation.date)) {
            this.messageView.update("Apenas negociações em dias úteis são aceitas!");
            return;
        }
        this.negotiations.add(negotiation);
        print(negotiation, this.negotiations);
        this.cleanForm();
        this.updateView();
    }
    cleanForm() {
        this.inputDate.value = "";
        this.inputAmount.value = "0";
        this.inputPrice.value = "0.0";
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("A negociação foi criada com sucesso!");
    }
    importData() {
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
    is_weekend(date) {
        const weekend = [WeekDays.SUNDAY, WeekDays.SATURDAY];
        return weekend.some((x) => x === date.getDay());
    }
    is_business_day(date) {
        return !this.is_weekend(date);
    }
}
__decorate([
    domInjector("#date")
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domInjector("#amount")
], NegotiationController.prototype, "inputAmount", void 0);
__decorate([
    domInjector("#price")
], NegotiationController.prototype, "inputPrice", void 0);
__decorate([
    runtime()
], NegotiationController.prototype, "add", null);
