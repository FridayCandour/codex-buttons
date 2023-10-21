import { Router, Screen, div } from "cradova";
import "./style/index.css";
import { header, Wrapper, footer } from "./components/index.js";
const template = function () {
  return div({ id: "CODEX" }, header, Wrapper, footer({}));
};

// const App = new Screen({ name: "Codex Buttons -  sample", template });

//? routing
// Router.BrowserRoutes({
//   "/": App,
//   "/404": App, //? makes as none implemented routes naviagates to "/"
// });

document.body.appendChild(template());
Router.onPageEvent(() => {
  //?  send analytics here
});

Router.addErrorHandler((error: unknown) => {
  console.log(error);
  //? send errors here
});
