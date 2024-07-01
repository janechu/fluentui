import { CSSTokenMap } from "../styles/token-helpers.js";

export const buttonCSSTokenMap: Array<CSSTokenMap> = [
  {
    name: "--ctrl-button-default-background-rest", // control token
    default: "#ffffffff",
    fallback: {
      name: "--semantic-button-background-rest", // semantic token
      default: null,
      fallback: {
        name: "", // fluent 2 token (?)
        default: null,
      }
    }
  }
];
