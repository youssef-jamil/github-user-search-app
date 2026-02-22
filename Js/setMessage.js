import { messageElement } from "./element";

export default function (message) {
  messageElement.textContent = message ? `${message}` : "";
}
