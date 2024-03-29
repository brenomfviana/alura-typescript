import { escape } from "../decorators/escape.js";
import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationsView extends View<Negotiations> {
  @escape
  protected template(model: Negotiations): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATE</th>
          <th>AMOUNT</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>
        ${model
          .list()
          .map((negotiation) => {
            return `
            <tr>
              <td>${this.formatDate(negotiation.date)}</td>
              <td>${negotiation.amount}</td>
              <td>${negotiation.price}</td>
            </tr>
          `;
          })
          .join("")}
      </tbody>
    </table>
    `;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}
