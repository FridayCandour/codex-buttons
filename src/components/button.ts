import { button, svg } from "cradova";
import { ButtonProps } from "./types";

export const Button = (init: ButtonProps = {} as ButtonProps) => {
  const className = ["button primary"];
  const text = (typeof init === "string" ? init : init?.text) || "Click Me";
  const children: HTMLSpanElement[] = [svg(text)];
  if (typeof init === "object") {
    if (init.Icon_Type && !init.Icons) {
      init.Icons = [];
    }
    // ? setting icon type
    switch (init.Icon_Type) {
      case "Leading":
        children.unshift(svg(init.Icons[0] || init["leading-icon"] || ""));
        break;
      case "LeadingTrailing":
        children.unshift(svg(init.Icons[0] || init["leading-icon"] || ""));
        children.push(svg(init.Icons.at(-1) || init["trailing-icon"] || ""));
        break;
      case "None":
        break;
      case "Standalone":
        children.length = 0;
        children.push(
          svg(
            init.Icons[0] || init["leading-icon"] || init["trailing-icon"] || ""
          )
        );
        break;
      case "Trailing":
        children.push(svg(init.Icons[0] || init["trailing-icon"] || ""));
        break;
      default:
        break;
    }
    // ? setting icon state
    switch (init.State) {
      case "Disabled":
        className.push("state-disabled");
        break;
      case "Hover":
        className.push("state-hover");
        break;
      default:
        className.push("default");
        break;
    }
    // ? setting icon state
    switch (init.Type) {
      case "Ghost":
        className.push("Ghost");
        break;
      case "Outline":
        className.push("Outline");
        break;
      case "Soft":
        className.push("Soft");
        break;
      case "Solid":
        className.push("Solid");
        break;
      default:
        break;
    }
    // ? setting icon state
    switch (init.Size) {
      case "Large":
        className.push("Large");
        break;
      case "Medium":
        className.push("Medium");
        break;
      case "Small":
        className.push("Small");
        break;
      default:
        break;
    }
    // ? setting icon style
    switch (init.Style) {
      case "Primary":
        className.push("primary");
        break;
      case "Secondary":
        className.push("secondary");
        break;
      case "Danger":
        className.push("danger");
        break;
      default:
        break;
    }
  }

  return button(...children, { className: className.join(" ") });
};
