import { NegotiationController } from "./controllers/negotiation-controller.js";
import { NegotiationsView } from "./views/negotiations-view.js";

const controller = new NegotiationController();

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.add();
});
