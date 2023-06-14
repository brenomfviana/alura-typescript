import { View } from "./view.js";
export class NegotiationsView extends View {
    template(model) {
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
              <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
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
}
