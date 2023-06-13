export class NegociationsView {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }
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
          .map((negociation) => {
            return `
            <tr>
              <td>${new Intl.DateTimeFormat().format(negociation.date)}</td>
              <td>${negociation.amount}</td>
              <td>${negociation.price}</td>
            </tr>
          `;
          })
          .join("")}
      </tbody>
    </table>
    `;
  }
  update(model) {
    this.element.innerHTML = this.template(model);
  }
}
